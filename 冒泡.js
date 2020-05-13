function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++ ) {
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[i] > arr[j]) {
				let beforeVar = arr[i]
				arr[i] = arr[j]
				arr[j] = beforeVar
			}
		}	
	}
    console.log(arr);
}

bubbleSort([1,3,4,5,2,1,2,6,8,7])