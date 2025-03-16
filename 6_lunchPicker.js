const lunches = [];

function addLunchToEnd(lunches, lunchItem) {
    lunches.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return lunches;
}

function addLunchToStart(lunches, lunchItem) {
    lunches.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return lunches;
}

function removeLastLunch(lunches) {
    if(lunches.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const popped = lunches.pop();
        console.log(`${popped} removed from the end of the lunch menu.`);
        return lunches;
    }
}

function removeFirstLunch(lunches) {
    if(lunches.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const shifted = lunches.shift();
        console.log(`${shifted} removed from the start of the lunch menu.`);
        return lunches;
    }
}

function getRandomLunch(lunches) {
    if(lunches.length === 0) {
        console.log("No lunches available.")
    } else {
        const randomIndex = Math.floor(Math.random() * lunches.length);
        const randomLunch = lunches[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`)
    }
}

function showLunchMenu(lunches) {
    if(lunches.length === 0) {
        console.log("The menu is empty.")
    } else {
        console.log(`Menu items: ${lunches.join(", ")}`);

    }
}

showLunchMenu(["Greens", "Corns", "Beans"]);