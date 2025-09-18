const quiz = [
    {
        number: "1",
        question: "Who is the currecnt president of the US?",
        options: ["joe biden", "camala harris", "donuld trump"],
        answer: "donuld trump"
    } 
];

// console.log(quiz[0].asnwer);

for (let i = 0; i<quiz.length; i++) {
    const { number, question, options, answer } = quiz[i];

    console.log(number);
    console.log(question);
    let str = "";
    for (let option of options) {
        str += " " + option;
    }
    console.log(str);
    console.log(answer);
}
