const questions = [ 
    {
        category: "Programming Languages",
        question: "Which programming language is used for web functionality?",
        choices: ["C#", "HTML", "JavaScript"],
        answer: "JavaScript" },
    {
        category: "Cars",
        question: "Which of the following car manufacturers is not part the Volkswagen Audi Group (VAG)?",
        choices: ["Seat", "BMW", "Audi"],
        answer: "BMW" },
    {
        category: "Tech",
        question: "Which of the following is not a real phone?",
        choices: ["Google Flixel", "Apple iPhone", "Huawei Mate"],
        answer: "Google Flixel" },
    {
        category: "Programming Languages",
        question: "Which of the following is the offical Apple IDE?",
        choices: ["Visual Studio Code", "GitHub", "XCode"],
        answer: "XCode" },
    {
        category: "Food",
        question: "Which of the following is not a type of sushi?",
        choices: ["Tonkatsu", "Nigiri", "Temaki"],
        answer: "Tonkatsu" },
];

function getRandomQuestion(questions) {
    const random = Math.floor(Math.random() * questions.length);
    return questions[random];
    //const randomObject = questions[random];
    //return randomObject.question;
}

function getRandomComputerChoice(choices) {
    const random = Math.floor(Math.random() * choices.length);
    console.log(choices[random]);
}

function getResults(getRandomQuestion, getRandomComputerChoice) {
    const answer = getRandomQuestion.answer;
    if(getRandomComputerChoice == answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${answer}`;
    }
}