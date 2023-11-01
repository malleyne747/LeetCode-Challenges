/**
 * @param {number[]} nums
 * @return {boolean}0
 */

/* 
 this is a short snippet of code to determine if an array of numbers is NOT a set. 
 If the array of numbers given contains atleast 1 duplicate value return true, otherwise return false if all elements are distinct. 

 To achieve this usecase I will  create a var "setOfAllValues" and set this equal to a new set object instantiated using the num array  as argument. 

 then i will compare the size of the set  to the size of the array. If the size is not the same then we will return true as the array is not a set, or false if the set is the same size as the array as this would mean the array is not a set. 

*/


var containsDuplicate = function(nums) {
    
    let setOfAllValues = new Set(nums); 
    console.log(nums.length); 
    console.log(setOfAllValues.size);
    
    if (nums.length == setOfAllValues.size){
        return false; 
    
    }
    
    else if (nums.length != setOfAllValues.size){
        return true; 
    }
    
    
    
    };