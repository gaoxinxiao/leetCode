var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }
        }
    }
}


function preorder(obj,arr) {
    if (obj.left) {
        preorder(obj.left,arr);
    }
    arr.push(obj.id)
    if (obj.right) {
        preorder(obj.right,arr);
    }
    return arr;
}

function inorder(obj,arr) {
    arr.push(obj.id)
    if (obj.left) {
        inorder(obj.left,arr);
    }
    if (obj.right) {
        inorder(obj.right,arr);
    }
    return arr;
}

function postorder(obj,arr) {
    if (obj.left) {
        postorder(obj.left,arr);
    }
    if (obj.right) {
        postorder(obj.right,arr);
    }
    arr.push(obj.id)
    return arr;
}

console.log(postorder(tree,[]))