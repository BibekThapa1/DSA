const add = (arr,num)=>{
    for (let i = 0;i<arr.length;i++){
        for (let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]==num){
                return [i,j];
            }
        }
    }
}

console.log(add([1,2,4,5,6,7],6))