
//寄生式组合继承


## React.createElement


```javascript
    <div id='1'>1</div>
    // 上面的 JSX 会被编译成这样
    React.createElement("div", {
        id: "1"
    }, "1")
```

ReactElement.js 文件是对createElement函数的实现

```javascript
 export function createElement(type, config, children) {}
```
首先createElement接收三个函数 第一个 是标签div第二个是对于标签上的一些属性比如ref，key的个属性的遍历，第三个children就是标签的内容

接下来是对config的操作

这段代码对 ref 以及 key 做了个验证（对于这种代码就无须阅读内部实现，通过函数名就可以了解它想做的事情），然后遍历 config 并把内建的几个属性（比如 ref 和 key）剔除后丢到 props 对象中。
```javascript

  if (config != null) {
    // 验证 ref 和 key，只在开发环境下
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    // 赋值操作
    // self 呢就是为了以后正确获取 this
    // source 基本来说没啥用，内部有一些 filename, line number 这种
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    // 遍历配置，把内建的几个属性剔除后丢到 props 中
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }
```

接下里是一段对于 children 的操作

```javascript
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }
```
首先把第二个参数之后的参数取出来，然后判断长度是否大于一。大于一的话就代表有多个 children，这时候 props.children 会是一个数组，否则的话只是一个对象。因此我们需要注意在对 props.children 进行遍历的时候要注意它是否是数组，

```javascript
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }
```

最后就是返回了一个 ReactElement 对象
```javascript
  const ReactElement = function(type, key, ref, self, source, owner, props) {
    const element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,

        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,

        // Record the component responsible for creating this element.
        _owner: owner,
    };
    return element;
};
```

内部代码很简单，核心就是通过 $$typeof 来帮助我们识别这是一个 ReactElement，后面我们可以看到很多这样类似的类型。另外我们需要注意一点的是：通过 JSX 写的 <APP /> 代表着 ReactElement，APP 代表着 React Component。


React.createElement节点阅读的顺序 
 
createElement 

if (是否存在config) {
    //存在

    1.处理config对其中的ref，key以及其他内容进行遍历处理
    2.处理children判断props.children是否是数组

    if (props.children) {
        //是数组进行遍历处理
    } else {
        //否则直接输出
    }
    3.处理children之后返回ReactElement 核心是$$typeof
}


## ReactBaseClasses

上文中讲到了 APP 代表着 React Component，那么这一小节我们就来阅读组件相关也就是 ReactBaseClasses.js 文件下的代码。

其实在阅读这部分源码之前，我以为代码会很复杂，可能包含了很多组件内的逻辑，结果内部代码相当简单。这是因为 React 团队将复杂的逻辑全部丢在了 react-dom 文件夹中，你可以把 react-dom 看成是 React 和 UI 之间的胶水层，这层胶水可以兼容很多平台，比如 Web、RN、SSR 等等。

该文件包含两个基本组件，分别为 Component 及 PureComponent，我们先来阅读 Component 这部分的代码。


```javascript
  function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === 'object' ||
      typeof partialState === 'function' ||
      partialState == null,
    'setState(...): takes an object of state variables to update or a ' +
      'function which returns an object of state variables.',
  );
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

// 这个 API 用的很好，不清楚作用的看文档吧
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
};
```

构造函数 Component 中需要注意的两点分别是 refs 和 updater，前者会在下文中专门介绍，后者是组件中相当重要的一个属性，我们可以发现 setState 和 forceUpdate 都是调用了 updater 中的方法，但是 updater 是 react-dom 中的内容，我们会在之后的文章中学习到这部分的内容。

另外 ReactNoopUpdateQueue 也有一个单独的文件，但是内部的代码看不看都无所谓，因为都是用于报警告的。


接下来我们来阅读 PureComponent 中的代码，其实这部分的代码基本与 Component 一致

```javascript
// 以下做的都是继承功能，让 PureComponent 继承自 Component
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype);
// 通过这个变量区别下普通的 Component
pureComponentPrototype.isPureReactComponent = true;
```

`PureComponent` 继承自 `Component`，继承方法使用了很典型的寄生组合式。

另外这两部分代码你可以发现每个组件都有一个 isXXXX 属性用来标志自身属于什么组件。

以上就是这部分的代码，接下来的一小节我们将会学习到 refs 的一部分内容。


## refs

refs 其实有好几种方式可以创建：

1.字符串方式（这种方式已经不推荐使用具体为啥不推荐还有待研究）
2.ref={el => this.el = el}（这种方式是react推荐的）
3.React.createRef

这一小节我们来学习 React.createRef 相关的内容，其余的两种方式不在这篇文章的讨论范围之内，请先定位到 ReactCreateRef.js 文件。

```javascript
// 这个代码是不是贼简单，就是让你外部能够通过 current 去拿到 ref
// 但是可能很多人没见过 Object.seal 这个 API
// 直接给不清楚的各位复制了文档：封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置
export function createRef(): RefObject {
  const refObject = {
    current: null,
  };
  if (__DEV__) {
    Object.seal(refObject);
  }
  return refObject;
}
```

内部实现很简单，如果我们想使用 ref，只需要取出其中的 current 对象即可。

另外对于函数组件来说，是不能使用 ref 的，因为在函数组件上使用 ref 属性，他们没有实例。

当然在之前也是有取巧的方式的，就是通过 props 的方式传递 ref，但是现在我们有了新的方式 forwardRef 去解决这个问题。


### forwardRef.js 


```javascript
// 这个 API 我也没有用过，具体文档看这里 https://reactjs.org/docs/forwarding-refs.html
// 总结来说就是能把 ref 传递到函数组件上
// 其实没有这个 API 之前，你也可以通过 props 的方式传递 ref
// 这个实现没啥好说的，就是让 render 函数多了 ref 这个参数
export default function forwardRef<Props, ElementType: React$ElementType>(
  render: (props: Props, ref: React$Ref<ElementType>) => React$Node,
) {
  if (__DEV__) {}
  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render,
  };
}
```


这部分代码最重要的就是我们可以在参数中获得 ref 了，因此我们如果想在函数组件中使用 ref 的话就可以把代码写成这样：


```javascript
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))
```


## ReactChildren

这一小节会是这篇文章中最复杂的一部分，可能需要自己写个 Demo 并且 Debug 一下才能真正理解源码为什么要这样实现。

首先大家需要定位到 ReactChildren.js 文件，这部分代码中我只会介绍关于 mapChildren 函数相关的内容，因为这部分代码基本就贯穿了整个文件了。

如果你没有使用过这个 API，可以先自行阅读 文档。

对于 mapChildren 这个函数来说，通常会使用在组合组件设计模式上。如果你不清楚什么是组合组件的话，可以看下 Ant-design，它内部大量使用了这种设计模式，比如说 Radio.Group、Radio.Button，另外这里也有篇 文档 介绍了这种设计模式。

我们先来看下这个函数的一些神奇用法



```javascript
React.Children.map(this.props.children, c => [[c, c]])
```
对于上述代码，map 也就是 mapChildren 函数来说返回值是 [c, c, c, c]。不管你第二个参数的函数返回值是几维嵌套数组，map 函数都能帮你摊平到一维数组，并且每次遍历后返回的数组中的元素个数代表了同一个节点需要复制几次。


如果文字描述有点难懂的话，就来看代码吧：

```html
<div>
  <span>1</span>
  <span>2</span>
</div>
```
对于上述代码来说，通过 c => [[c, c]] 转换以后就变成了

```html
<div>
<span>1</span>
<span>1</span>
<span>2</span>
<span>2</span>
</div>
```

接下里我们进入正题，来看看 `mapChildren` 内部到底是如何实现的。

```javascript
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  // 遍历出来的元素会丢到 result 中最后返回出去
  const result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  // 这里是处理 key，不关心也没事
  let escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  // getPooledTraverseContext 和 releaseTraverseContext 是配套的函数
  // 用处其实很简单，就是维护一个大小为 10 的对象重用池
  // 每次从这个池子里取一个对象去赋值，用完了就将对象上的属性置空然后丢回池子
  // 维护这个池子的用意就是提高性能，毕竟频繁创建销毁一个有很多属性的对象消耗性能
  const traverseContext = getPooledTraverseContext(
    array,
    escapedPrefix,
    func,
    context,
  );
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
```

接下来我们来学习 traverseAllChildrenImpl 中的代码，这部分的代码需要分为两块来讲

```javascript
  // 这个函数核心作用就是通过把传入的 children 数组通过遍历摊平成单个节点
  // 然后去执行 mapSingleChildIntoContext

  // 开始判断 children 的类型
  const type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  let invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }
  // 如果 children 是可以渲染的节点的话，就直接调用 callback
  // callback 是 mapSingleChildIntoContext
  // 我们先去阅读下 mapSingleChildIntoContext 函数的源码
  if (invokeCallback) {
    callback(
      traverseContext,
      children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar,
    );
    return 1;
}
```

这部分的代码相对来说简单点，主体就是在判断 children 的类型是什么。如果是可以渲染的节点的话，就直接调用 callback





## render

想必大家在写 React 项目的时候都写过类似的代码

```javascript
ReactDOM.render(<APP />, document.getElementById('root')
  // 想必大家都写过 ReactDOM.render(<APP />, document.getElementById('root')
  // 那么参数含义就不细讲了，另外第三个参数笔者没有用过，有兴趣了解的可以自行浏览文档
  render(
    element: React$Element<any>,
    container: DOMContainer,
    callback: ?Function,
  ) {
    invariant(
      isValidContainer(container),
      'Target container is not a DOM element.',
    );
    // 注意下 forceHydrate 参数，为 true 时是服务端渲染，这部分内容笔者不会讲到
    // 调用 render 函数的话这个值永远为 false，调用 hydrate 函数的话这个值会为 true
    return legacyRenderSubtreeIntoContainer(
      null,
      element,
      container,
      false,
      callback,
    );
  }
```


legacyRenderSubtreeIntoContainer函数写死了第四个参数forceHydrate为false这个参数为true时表明是服务端渲染，现在是客户端渲染



