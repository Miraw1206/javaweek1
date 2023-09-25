function countDuplicates(str) {
    const charCount = {};
    const lowerStr = str.toLowerCase();

    for (const char of lowerStr) {
        if (/[a-z0-9]/.test(char)) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    let duplicateCount = 0;
    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplicateCount++;
        }
    }
    return duplicateCount;
}
console.log(countDuplicates("Indivisibilities"));