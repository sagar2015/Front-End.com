// let txt= "<tr><td>" + sub[i] + "</td>" + "<td>" + marks[j] + "</td></tr>";

let sub = [];
let marks = [];
let total = 0;
let percentage = 0;
let num = prompt("How many subject Do you want to add?");
for (let i = 0; i < num; i++) {
    sub[i] = prompt("Please Enter your Subject");
    marks[i] = prompt("Please Enter Marks of" + " " + sub[i]);
    total += parseInt(marks[i]);
}
percentage = total / marks.length;

let txt = "<table><tr><th>SUBJECT</th><th>MARKS</th>";

for (let i = 0, j = 0; i < sub.length, j < marks.length; i++, j++) {
    txt += "<tr><td>" + sub[i] + "</td>" + "<td>" + marks[j] + "</td></tr>";
}
txt += "<tr><td>TOTAL</td><td>" + total + "</td></tr>";
txt += "<tr><td>PERCENTAGE</td><td>" + percentage + "</td></tr>";

let grade = "faiil"
if (percentage >= 50 && percentage <= 60) {
    grade = "Pass";
} else if (percentage > 60 && percentage <= 70) {
    grade = "Second Class"
} else if (percentage > 70 && percentage <= 80) {
    grade = "First class"
} else if (percentage > 80 && percentage <= 100) {
    grade = "Distiction"
} else {
    grade = "Fail"
}
txt += "<tr><td>GRADE</td><td>" + grade + "</td></tr>";
txt += "</table>";

document.write(txt);