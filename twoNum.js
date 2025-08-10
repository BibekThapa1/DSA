// function twoSum(nums,target){
//     const numMap = {}

//     for (i=0;i<nums.length; i++){
//         const complement = target - nums[i]
//         if(complement in numMap && numMap[complement] !== i){
//             return [numMap[complement],i]
//         }
//         numMap[nums[i]] = i;
//     }
//     return []
// }

// const nums = [2,10,7,20]
// const target = 9;
// const result = twoSum(nums,target)
// console.log(result);

function twoSum(nums, target) {
  const numMap = {}
  for (i=0;i<nums.length;i++){
    const complement = target - nums[i]
    if(complement in numMap && numMap[complement] != i){
        return [numMap[complement],i]
    }
    numMap[nums[i]] = i
  }

  return []
}

const nums = [2, -10, +32, 20];
const target = 22;
const result = twoSum(nums, target);
console.log(result);
