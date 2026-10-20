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