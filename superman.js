const maxChickensProtected = (chickensAmount, roofWidth, positions) => {
    let left = 0;
    let maxChickens = 0;
    const positionsArray = positions.split(' ').map(Number);
    // Use a sliding roof approach to find the maximum number of chickens protected
    for (let right = 0; right < chickensAmount; right++) {
        
        // Expand the roof by moving the right pointer
        while (positionsArray[right] - positionsArray[left] >= roofWidth) {
            // Shrink the window from the left if the window size exceeds k
            left++;
            
        }
        // Calculate the number of chickens within the current roof
        let currentCount = (right - left) + 1;        
        // Update the maximum number of chickens protected
        maxChickens = Math.max(maxChickens, currentCount);
    }

    return maxChickens;
}

module.exports = {
    maxChickensProtected
};