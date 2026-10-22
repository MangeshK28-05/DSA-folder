# Contains Duplicate

- **Difficulty:** Easy
- **NeetCode Category:** Array & Hashing

## 1. Brute Force Approach & optimal approach

```javascript
function containsDuplicate(arr){
    if(arr.length === 0) return 'invalid'
    for(let i = 0 ; i< arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[i]=== arr[j])
                return true
        }        
    }
    return false
}
```
```javascript
function containsDuplicateOptimal(arr){
    if(arr.length === 0) return 'invalid'
    const seenNums = new Set()
    for(const num of arr){
        if(seenNums.has(num)){
            return true
        }
        seenNums.add(num)
    }
    return false
}
```

# Valid Anagram 

- **Difficulty:** Easy
- **NeetCode Category:** Array & Hashing

```javascript
function validAnagram(s,t){
    if(s.length !== t.length) return false

   const sSplit = s.split('').sort().join('')
   const tSplit = t.split('').sort().join('')

    if(sSplit === tSplit ) return true
    else return false
}
```

# Concatenation of Array

- **Difficulty:** Easy
- **NeetCode Category:** Array & Hashing

```javascript
function concatnationArray(arr){
    let newArr = []
    for(let i = 0; i <arr.length ; i++){
        newArr.push(arr[i])
    }
    return [...arr , ...newArr]
}
```

#Find the smallest positive missing number from an array
- **Diificulty:** Hard
- **NeetCode Category:** Array & Hashing

### solved set and for loop approach
```javascript
function findMissig(nums) {
    nums.sort((a, b) => a - b);

    let missing = 1;

    for (let num of nums) {
        if (num === missing) {
            missing++;
        }
    }

    return missing;
};
```
```javascript
function findMissing(nums){
    const numSet = new Set(nums);
    
    let missing = 1;
    while (numSet.has(missing)) {
        missing++;
    }
    
    return missing;
}
```
#find the majority element
- **Diificulty:** easy
- **NeetCode Category:** Array & Hashing
 ###solved in brute force and set way

 ```javascript
 function MajorityElement (nums) {
    let theBigMajorityCount = nums.length/2
    let maxfreq = nums[0]
    for(let i = 0 ; i < nums.length; i++){
        let ElemCount = 0
        for(let j = 0; j<nums.length ; j++){
            if(nums[i] === nums[j]){
                ElemCount++
            }
        }
    if(ElemCount > theBigMajorityCount){
        maxfreq = nums[i]
    }
    }
    return maxfreq
    }
 ```
 ```javascript
 function MajorityElement (nums) {
    let theBigMajorityCount = nums.length/2
    let maxfreq = nums[0]
    for(let i = 0 ; i < nums.length; i++){
        let ElemCount = 0
        for(let j = 0; j<nums.length ; j++){
            if(nums[i] === nums[j]){
                ElemCount++
            }
        }
    if(ElemCount > theBigMajorityCount){
        maxfreq = nums[i]
    }
    }
    return maxfreq
    }
 ```

 check panagram
- **Diificulty:** easy
- **Category:** hash table

```javascript
function checkPana(sentence){
    let set = new Set(sentence)
    if(set.size != 26) return false
    else return true 
}
```
# Best time to buy and sell the stock

- **Difficulty:** Easy
- **Category:** Array

```javascript
function maxProfit(arr){
let minProfit = prices[0]
let theBigProfit = 0

for(let i = 1 ; i < arr.length ; i++){
    if(arr[i]<minProfit){
        minProfit = prices[i]
    }
    let profit = prices[i]-minProfit

    if(profit > theBigProfit){
        theBigProfit = profit
    }
}
return theBigProfit
}
```
# Move zeros to an end 
### using two different methods

- **Difficulty:** Easy
- **Category:** Array

```js
function moveZerosToEnd(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}
```
```js
function moveZerosToEndTwo (nums) {
let nonZeros = nums.filter(n => n !== 0);
let zeros = nums.filter(n => n === 0);

let merged = [...nonZeros, ...zeros];

for (let i = 0; i < nums.length; i++) {
    nums[i] = merged[i];
}}
```