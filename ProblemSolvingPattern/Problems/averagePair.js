//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

/**
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where
 * the average of the pair equals the target average.
 *
 * @param {number[]} arr - The sorted array of integers.
 * @param {number} targetAverage - The target average to find.
 * @returns {boolean} - True if such a pair exists, false otherwise.
 *
 * Time Complexity: O(N) - We iterate through the array at most once.
 * Space Complexity: O(1) - We only use a few variables for pointers.
 */
function averagePair(arr, targetAverage) {
    // If the array is empty, no pair can be formed.
    if (arr.length === 0) {
        return false;
    }

    let left = 0; // Pointer starting from the beginning of the array
    let right = arr.length - 1; // Pointer starting from the end of the array

    while (left < right) {
        const currentAverage = (arr[left] + arr[right]) / 2;

        if (currentAverage === targetAverage) {
            // Found a pair that matches the target average
            return true;
        } else if (currentAverage < targetAverage) {
            // The current average is too small,
            // we need a larger sum. Move the left pointer right
            // to increase the sum.
            left++;
        } else { // currentAverage > targetAverage
            // The current average is too large,
            // we need a smaller sum. Move the right pointer left
            // to decrease the sum.
            right--;
        }
    }

    // No pair found after checking all possibilities
    return false;
}

// --- Sample Input Tests ---
console.log(`averagePair([1,2,3], 2.5): ${averagePair([1,2,3], 2.5)}`);             // true
console.log(`averagePair([1,3,3,5,6,7,10,12,19], 8): ${averagePair([1,3,3,5,6,7,10,12,19], 8)}`); // true
console.log(`averagePair([-1,0,3,4,5,6], 4.1): ${averagePair([-1,0,3,4,5,6], 4.1)}`); // false
console.log(`averagePair([], 4): ${averagePair([], 4)}`);                       // false
console.log(`averagePair([1,2,4,5], 3.5): ${averagePair([1,2,4,5], 3.5)}`);      // true (1.5 + 5 / 2 = 3.25, 2 + 5 / 2 = 3.5)
console.log(`averagePair([1,2,3,4], 2.5): ${averagePair([1,2,3,4], 2.5)}`);      // true (1 + 4 / 2 = 2.5)
console.log(`averagePair([1,2,3,4], 5): ${averagePair([1,2,3,4], 5)}`);          // false
console.log(`averagePair([1,2,3,4], 2): ${averagePair([1,2,3,4], 2)}`);          // true (1 + 3 / 2 = 2)