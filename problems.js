// Contains duplicate , Input: nums = [1, 2, 3, 3] .. output : true

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

// optimal 
function containsDuplicateOptimal(arr){
    if(arr.length === 0) return 'invald'
    const seenNums = new Set()
    for(const num of arr){
        if(seenNums.has(num)){
            return true
        }
        seenNums.add(num)
    }
    return false
}

// valid anagram
function validAnagram(s,t){
    if(s.length !== t.length) return false

   const sSplit = s.split('').sort().join('')
   const tSplit = t.split('').sort().join('')

    if(sSplit === tSplit ) return true
    else return false
}

// Concatenation of Array Input: nums = [1,4,1,2] Output: [1,4,1,2,1,4,1,2].
function concatnationArray(arr){
    let newArr = []
    for(let i = 0; i <arr.length ; i++){
        newArr.push(arr[i])
    }
    return [...arr , ...newArr]
}

// first missing positive
function findMissing (nums) {
    nums.sort((a, b) => a - b)

    let missing = 1

    for (let num of nums) {
        if (num === missing) {
            missing++
        }
    }

    return missing
}

// Majority element
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

//part 2 using set
function findJewls(jewels, stones){
    let set = new Set()
    let count = 0
    for ( let i = 0 ; i < jewels.length ; i++){
        let ch = jewels.charAt(i)
        set.add(ch)
    }
    for(let i = 0 ; i < stones.length ; i++){
        if(set.has(ch))
            count++
    }
    return count
}

// check panagram (using set)

function checkPana(sentence){
    let set = new Set(sentence)
    if(set.size != 26) return false
    else return true 
}

// best time to buy and sell stock
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

// move zeros with two different methods
function moveZerosToEnd(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

function moveZerosToEndTwo (nums) {
let nonZeros = nums.filter(n => n !== 0);
let zeros = nums.filter(n => n === 0);

let merged = [...nonZeros, ...zeros];

for (let i = 0; i < nums.length; i++) {
    nums[i] = merged[i];
}}