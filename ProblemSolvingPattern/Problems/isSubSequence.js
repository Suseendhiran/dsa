//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

/**
 * Checks whether the characters in the first string form a subsequence
 * of the characters in the second string.
 *
 * @param {string} str1 - The potential subsequence string.
 * @param {string} str2 - The main string to check against.
 * @returns {boolean} - True if str1 is a subsequence of str2, false otherwise.
 *
 * Time Complexity: O(N + M) where N is the length of str1 and M is the length of str2.
 * (At most, we iterate through both strings once).
 * Space Complexity: O(1) - Only a few variables are used.
 */
function isSubsequence(str1, str2) {
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2

    // Loop through str2
    while (j < str2.length) {
        // If the characters match, advance the pointer for str1
        // This means we've found the current character of str1 in str2
        if (str1[i] === str2[j]) {
            i++;
        }
        // Always advance the pointer for str2, regardless of a match
        // We're iterating through str2 to find all characters of str1
        j++;

        // If we've found all characters of str1 (i.e., i has reached the end of str1),
        // then str1 is a subsequence of str2.
        if (i === str1.length) {
            return true;
        }
    }

    // If the loop finishes and i has not reached the end of str1,
    // it means not all characters of str1 were found in str2 in order.
    return false;
}

// --- Examples ---
console.log(`isSubsequence('hello', 'hello world'): ${isSubsequence('hello', 'hello world')}`); // true
console.log(`isSubsequence('sing', 'sting'): ${isSubsequence('sing', 'sting')}`);             // true
console.log(`isSubsequence('abc', 'abracadabra'): ${isSubsequence('abc', 'abracadabra')}`); // true
console.log(`isSubsequence('abc', 'acb'): ${isSubsequence('abc', 'acb')}`);                 // false (order matters)
console.log(`isSubsequence('ace', 'abcde'): ${isSubsequence('ace', 'abcde')}`);             // true
console.log(`isSubsequence('cat', 'act'): ${isSubsequence('cat', 'act')}`);                 // false
console.log(`isSubsequence('', 'any_string'): ${isSubsequence('', 'any_string')}`);       // true (empty string is always a subsequence)
console.log(`isSubsequence('a', ''): ${isSubsequence('a', '')}`);                          // false
console.log(`isSubsequence('abc', 'abc'): ${isSubsequence('abc', 'abc')}`);               // true