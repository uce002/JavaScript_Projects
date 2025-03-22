function getAverage(scoresArr) {
    let total = 0;
    for(let score of scoresArr) {
        total += score;
    }
    console.log(total);
    let avgScore = total / scoresArr.length;
    return avgScore;
}

function getGrade(score) {
    const grades = [
        [100, "A+"],
        [90, "A"],
        [80, "B"],
        [70, "C"],
        [60, "D"],
        [0, "F"]
    ];
    for (let [minScore, grade] of grades) {
        if (score >= minScore) return grade; // Return the first matching grade
    }
}

function hasPassingGrade(score) {
    if(getGrade(score) === "F") {
        return false;
    } else {
        return true;
    }
}

function studentMsg(scoresArr, score) {
    if(hasPassingGrade(score)) {
        return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(score)}. You passed the course.`;
    } else if(!hasPassingGrade(score)) {
        return `Class average: ${getAverage(scoresArr)}. Your grade: ${getGrade(score)}. You failed the course.`;
    }
}