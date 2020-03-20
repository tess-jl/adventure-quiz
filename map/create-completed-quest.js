// function that takes a quest as an input and and returns updated spans 
function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.style.top = quest.map.top; // ?? I think this is to add the checks or Xs on the completed quests
    span.style.left = quest.map.left; // ?? 

    span.textContent = quest.title;
    return span;
}

export default createCompletedQuest;