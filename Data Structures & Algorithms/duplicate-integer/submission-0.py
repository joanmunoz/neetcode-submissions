class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        result = False
        visited_numbers = []

        for number in nums:
            if number in visited_numbers:
                result = True;
                break
            else:
                visited_numbers.append(number)

        return result
        