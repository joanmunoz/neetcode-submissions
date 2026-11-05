class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;

        for (let i = arr.length-1; i >= 0; i--) {
            let new_max = Math.max(max, arr[i]);
            arr[i] = max;
            max = new_max;
        }

        return arr;
    }
}
