

function MaxStr(arr){
    arr.sort((a,b)=> a.charAt(0) < b.charAt(0));
}

MaxStr(['3','30','34','5','9'])