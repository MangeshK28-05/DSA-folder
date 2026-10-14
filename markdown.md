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