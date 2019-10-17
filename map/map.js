import loadProfile from './common/load-profile.js';
import getUser from './data/api.js';
import isDead from '../common/is-dead.js';
import hasCompletedAllQuests from './completed-quest';
import quests from './data/quest-data.js';
import createCompletedQuest from './create-completed-quest.js'; 
import createQuestLink from './create-quest-link.js'; 


//every time user gets to the map, load the profile of the user 
loadProfile(); 

//need to get data from localStorage 
const currentUser = getUser(); 

// two conditions when user should not be on the map page, and instead be on the results page, are when they're dead or when they're done with the quests
if (isDead(currentUser) || hasCompletedAllQuests(currentUser, quests)) {
    window.location = '../results'; 
}

const nav = document.getElementById('quests');

quests.forEach(quest => {
    let questDisplay = null; // ?? 

    if (currentUser.completed[quest.id]) {
        questDisplay = createCompletedQuest(quest);
    } else {
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
}); 

