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
        str += " " + option.to;
    }
    console.log(str);
    console.log(answer);
}


// const fs = require("node:fs");

// let getDirs = function(rootDir, cb) { 
//     fs.readdir(rootDir, function(err, files) { 
//         let dirs = []; 
//         for (let index = 0; index < files.length; ++index) { 
//             let file = files[index]; 
//             if (file[0] !== '.') { 
//                 let filePath = rootDir + '/' + file; 
//                 fs.stat(filePath, function(err, stat) {
//                     if (stat.isDirectory()) { 
//                         dirs.push(this.file); 
//                     } 
//                     if (files.length === (this.index + 1)) { 
//                         return 0; 
//                     } 
//                 }.bind({index: index, file: file})); 
//             }
//         }
//     });
// }

// console.log(getDirs("/"));