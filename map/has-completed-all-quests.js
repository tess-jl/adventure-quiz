function hasCompletedAllQuests (currentUser, quests) { // returns true or false 
    quests.forEach(i => {
        const questToConsider = quests[i];
        if (!currentUser.completed[questToConsider.id]) {
            return false;
        }
    });
    return true;
}

export default hasCompletedAllQuests;