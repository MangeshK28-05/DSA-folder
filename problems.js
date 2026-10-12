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
console.log(containsDuplicate([1,2,8,3]))

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
console.log(containsDuplicateOptimal([1,1,3,4]))

// valid anagram
function validAnagram(s,t){
    if(s.length !== t.length) return false

   const sSplit = s.split('').sort().join('')
   const tSplit = t.split('').sort().join('')

    if(sSplit === tSplit ) return true
    else return false
}