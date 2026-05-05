class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // brute force
        let count ={}, arr=[];
        for(let n of nums){
            if(count[n]){
                count[n]+=1;
            }else{
                count[n]=1
            }
        }
        console.log(count)
        for( let key in count){
            arr.push(key);
        }
        arr.sort((a,b)=>count[b]-count[a]);
        return arr.slice(0,k)
    }
}
