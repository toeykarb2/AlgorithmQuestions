const BossBabyRevenged =  (items) => {
    
    let shotRecieved = 0; // Number of shots
    let checklastRevenged = 0; // Number of last revenged

    console.log(items.length);
    // check from last day if Boss baby revenged until he recieved shot 
    let lastRevenged = items.split("S");
    checklastRevenged = lastRevenged[lastRevenged.length - 1].length;
    
    // Traverse the string exclude the last revenged
    for (let j = 0; j < items.length - checklastRevenged; j++) {
        // If 'R' is encountered, it decreases the number of pending shots
        if (items[j] === 'R') {
            shotRecieved--;
            // If 'S' is encountered, it increases the number of pending shots
        } else if (items[j] === 'S') {
            shotRecieved++;
        }
        // If Boss baby revenged more than neighborhood shot we will return Bad boy
        if (shotRecieved < 0){
            return "Bad boy"
        }
      
    }
    
    // Determine the result based on pending shots including the last revenged
    if ((shotRecieved - checklastRevenged) > 0) {
        // if Boss baby have not been revenged at least once
        return "Bad boy";
    } else {
        return "Good boy";
    }
}

module.exports = {
    BossBabyRevenged
};