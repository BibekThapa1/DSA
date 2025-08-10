function selectionSort(arr){
   for(i=0;i<arr.length;i++){
    let minIndex = i

    for(j=i+1; j<arr.length; j++){
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
    }

    if(i!=minIndex){
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
   }

   return arr
}

const myArr = [3,1,4,2,7,6]
const arr = selectionSort(myArr)
console.log(arr);