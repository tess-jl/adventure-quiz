// quests 


// kayaked out to a small island digging for clams when a good swell blows in and the chop too much to paddle back now do you --> use your cell phone to call your family -->  paddle back through short cut, wait, call for help 

// sailing and caught a lobster buoy during the eggemoggin reach regatta--> dive under the boat and cut it off from your keel, phone call, radio the lobstermen

// bear eats the honey 

const hitDeer = {
    id: 'hit-deer', 
    title: 'Hit a deer during a Nor\'eastah', 
    map: {
        top: '70%', 
        left: '20%', 
    }, 
    image: 'noreaster.jpg',
    //audio? 
    //action?
    description: `
        You're driving back from pickin' up a few bags of scallops from your scallop dealer a few towns over when the forcaster Nor'eastah rolls in early on your long drive home. Your 4 wheel drive is keeping you steady until a deer jumps into the road. You strike the deer and immediately pull to the side of the road to assess the damage. What do you do?
    `, 
    choices: [{
        id: 'phone-call', 
        description: 'You use your cell phone to call your family and ask if they want deer for dinner', 
        result: `
            You should have known better- there's no cell service in Downeast, Maine! It's all dead zones. In your anger, you drop your phone and break the screen. You've lost 40 bucks and you can't re-up on your Allen's Coffee Brandy for ice fishing next week. Wicked lame.
        `, 
        hp: -30,
        gold: -40
    } , {
        id: 'neighbors', 
        description: 'You look around for driveways or houses nearby. You see one small home with an f150 parked in the dooryard. It\'s only 6pm, so you walk over and knock on the door to check if the homeowner wants to eat the deer you just hit dinner',
        result: `
            The family that lives nearby has a cold demeaner when they answer the door, but once you explain that there is a deer that can be butchered and frozen for winter meals, they happily take the animal to feed the family. Waste not! They reward you for your efforts with many cans of homemade blueberry jam,worth 40 bucks.
        `, 
        hp: 0, 
        gold: 40
    }, {
        id: 'keep-driving', 
        description: 'It\'s cold and you want to eat your scallops. You leave the deer and keep driving home.',
        result: `
            You have wasted a good source of free food that many families rely on for food. You have dishonored the animal and the tradition of hunting in the region. You might as well be from So Po on the way back from the Maine Mall. During your ride home you confuse 4 wheel drive high for 4 wheel drive low and get stuck in the snow. You don't have any gravel in your car to give the tires traction. Wicked lame. 
        `,
        hp: -50, 
        gold: 0
    }]
};

const strandedOnIsland = {
    id: 'hit-deer', 
    title: 'Hit a deer during a Nor\'eastah', 
    map: {
        top: '70%', 
        left: '20%', 
    }, 
    image: 'noreaster.jpg',
    //audio? 
    //action?
    description: `
        You're driving back from pickin' up a few bags of scallops from your scallop dealer a few towns over when the forcaster Nor'eastah rolls in early on your long drive home. Your 4 wheel drive is keeping you steady until a deer jumps into the road. You strike the deer and immediately pull to the side of the road to assess the damage. What do you do?
    `, 
    choices: [{
        id: 'phone-call', 
        description: 'You use your cell phone to call your family and ask if they want deer for dinner', 
        result: `
            You should have known better- there's no cell service in Downeast, Maine! It's all dead zones. In your anger, you drop your phone and break the screen. You've lost 40 bucks and you can't re-up on your Allen's Coffee Brandy for ice fishing next week. Wicked lame.
        `, 
        hp: -30,
        gold: -40
    } , {
        id: 'neighbors', 
        description: 'You look around for driveways or houses nearby. You see one small home with an f150 parked in the dooryard. It\'s only 6pm, so you walk over and knock on the door to check if the homeowner wants to eat the deer you just hit dinner',
        result: `
            The family that lives nearby has a cold demeaner when they answer the door, but once you explain that there is a deer that can be butchered and frozen for winter meals, they happily take the animal to feed the family. Waste not! They reward you for your efforts with many cans of homemade blueberry jam,worth 40 bucks.
        `, 
        hp: 0, 
        gold: 40
    }, {
        id: 'keep-driving', 
        description: 'It\'s cold and you want to eat your scallops. You leave the deer and keep driving home.',
        result: `
            You have wasted a good source of free food that many families rely on for food. You have dishonored the animal and the tradition of hunting in the region. You might as well be from So Po on the way back from the Maine Mall. During your ride home you confuse 4 wheel drive high for 4 wheel drive low and get stuck in the snow. You don't have any gravel in your car to give the tires traction. Wicked lame. 
        `,
        hp: -50, 
        gold: 0
    }]
};

const caughtLobsterPot = {
    id: 'hit-deer', 
    title: 'Hit a deer during a Nor\'eastah', 
    map: {
        top: '70%', 
        left: '20%', 
    }, 
    image: 'noreaster.jpg',
    //audio? 
    //action?
    description: `
        You're driving back from pickin' up a few bags of scallops from your scallop dealer a few towns over when the forcaster Nor'eastah rolls in early on your long drive home. Your 4 wheel drive is keeping you steady until a deer jumps into the road. You strike the deer and immediately pull to the side of the road to assess the damage. What do you do?
    `, 
    choices: [{
        id: 'phone-call', 
        description: 'You use your cell phone to call your family and ask if they want deer for dinner', 
        result: `
            You should have known better- there's no cell service in Downeast, Maine! It's all dead zones. In your anger, you drop your phone and break the screen. You've lost 40 bucks and you can't re-up on your Allen's Coffee Brandy for ice fishing next week. Wicked lame.
        `, 
        hp: -30,
        gold: -40
    } , {
        id: 'neighbors', 
        description: 'You look around for driveways or houses nearby. You see one small home with an f150 parked in the dooryard. It\'s only 6pm, so you walk over and knock on the door to check if the homeowner wants to eat the deer you just hit dinner',
        result: `
            The family that lives nearby has a cold demeaner when they answer the door, but once you explain that there is a deer that can be butchered and frozen for winter meals, they happily take the animal to feed the family. Waste not! They reward you for your efforts with many cans of homemade blueberry jam,worth 40 bucks.
        `, 
        hp: 0, 
        gold: 40
    }, {
        id: 'keep-driving', 
        description: 'It\'s cold and you want to eat your scallops. You leave the deer and keep driving home.',
        result: `
            You have wasted a good source of free food that many families rely on for food. You have dishonored the animal and the tradition of hunting in the region. You might as well be from So Po on the way back from the Maine Mall. During your ride home you confuse 4 wheel drive high for 4 wheel drive low and get stuck in the snow. You don't have any gravel in your car to give the tires traction. Wicked lame. 
        `,
        hp: -50, 
        gold: 0
    }]
};

const quests = [ hitDeer, strandedOnIsland, caughtLobsterPot ];

export default quests; 
