

function hasCompletedAllQuests (currentUser, quests) { // returns true or false 
    let isComplete = true; 
    quests.forEach(quest => { // function within a function unlike a for loop, so if I had a simple return in here then it would not break the whole function, just the forEach function!! so I had to write the iscomplete = true and do the boolean return this way instead
        if (!currentUser.completed[quest.id]) {
            isComplete = false;
        }
    });
    return isComplete;
}

export default hasCompletedAllQuests;