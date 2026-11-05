class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = [];

        for (const op of operations) {
            if (op === '+') {
                stack.push(stack[stack.length-1] + stack[stack.length-2]);
            } else if (op === 'D') {
                stack.push(2 * stack[stack.length-1]);
            } else if (op === 'C') {
                stack.pop();
            } else {
                stack.push(Number(op));
            }
        }

        return stack.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
}
