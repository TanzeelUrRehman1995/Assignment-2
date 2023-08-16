// Chapter No. 08 Q1

// var num = 10;

// document.write(`Result: <br> The value of a is: ${num} <br> ====================== <br> <br>`);

// document.write(`The value of ++num is: ${++num} <br> Now the value of num is: ${num} <br> <br>`);
// document.write(`The value of ++num is: ${num++} <br> Now the value of num is: ${num} <br> <br>`);
// document.write(`The value of ++num is: ${--num} <br> Now the value of num is: ${num} <br> <br>`);
// document.write(`The value of ++num is: ${num--} <br> Now the value of num is: ${num} <br> <br>`);

// Chapter No. 08 Q2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write(result);

// document.write(--a + "<br>");
// document.write(--a - --b + "<br>");
// document.write(--a - --b + ++b + "<br>");
// document.write(--a - --b + ++b + b--);

// Chapter No. 08 Q3

// let userName = window.prompt("What is your name");
// document.write(`Welcome! ${userName}`);

// Chapter No. 08 Q4

// var num = +window.prompt("Enter any number");

// for (var i = 1; i <= 10; i++) {
//   document.write(`${num} x ${i} = ${num * i} <br>`);
// }

// Chapter No. 08 Q5

// var totalMarks = 100;
// var subject1 = document.getElementById("subject1").innerHTML = window.prompt("Enter first Subject : ");
// var obtainedMarksOfSub1 = document.getElementById("obtainedMarksSub1").innerHTML = +window.prompt("Enter Obtained Marks of : " + subject1);
// var percentageOfSub1 = document.getElementById("percentageOfSub1").innerHTML =`${obtainedMarksOfSub1/totalMarks * 100}%`
// ;
// var subject2 = document.getElementById("subject2").innerHTML = window.prompt("Enter Second Subject : ");
// var obtainedMarksOfSub2 = document.getElementById("obtainedMarksSub2").innerHTML = +window.prompt("Enter Obtained Marks of : " + subject2);
// var percentageOfSub2 = document.getElementById("percentageOfSub2").innerHTML =`${obtainedMarksOfSub2/totalMarks * 100}%`;
// var subject3 = document.getElementById("subject3").innerHTML = window.prompt("Enter Third Subject : ");
// var obtainedMarksOfSub3 = document.getElementById("obtainedMarksSub3").innerHTML = +window.prompt("Enter Obtained Marks of : " + subject3);
// var percentageOfSub3 = document.getElementById("percentageOfSub3").innerHTML =`${obtainedMarksOfSub3/totalMarks * 100}%`;

// var totalOfObtainedMarks = document.getElementById("totalOfObtainedMarks").innerHTML = `${obtainedMarksOfSub1 + obtainedMarksOfSub2 + obtainedMarksOfSub3}`;

// var averagePercentage = document.getElementById("averagePercentage").innerHTML = `${(totalOfObtainedMarks/300 *100)}%`

// Chapter No. 09 Q1

// var city = window.prompt("Enter Your City");
// document.write(` Welcome To City of Lights ${city}`);

// Chapter No. 09 Q2

// var gender = window.prompt("Gender");

// if(gender === 'male'){
//     window.alert("Good Morning Sir");
// } else if(gender === 'female') {
//     window.alert("Good Morning ma'am");
// } else {
//     window.alert("Invalid Input");
// }

// Chapter No. 09 Q3

// var signalLight = window.prompt("Traffic Signal Light ? " + "\n" + "red | yellow | yreen");

// if (signalLight === "red"){
//     window.alert("Must Stop");
// } else if (signalLight === "yellow"){
//     window.alert("Ready to Move");
// } else if (signalLight === "green"){
//     window.alert("Move Now");
// }

// Chapter No. 09 Q4

// var remaingFuel = window.prompt("Enter Remaining Fuel In Litres");

// if (remaingFuel < 0.25){
//     window.alert("Please refill the fuel in your car");
// }

// Chapter No. 09 Q6

// var obtainmarksInEnglish = +window.prompt("Enter obtained marks in english");
// var obtainmarksInUrdu = +window.prompt("Enter obtained marks in Urdu");
// var obtainmarksInMaths = +window.prompt("Enter obtained marks in Maths");
// var totalMarks = 300;
// var obtainedMarks = obtainmarksInEnglish + obtainmarksInMaths + obtainmarksInUrdu;
// var percentage = obtainedMarks/totalMarks * 100;

// document.write("<h1> Mark Sheet </h1>");
// document.write("Total Marks = " + totalMarks + "<br>");

// document.write(`Obtained Marks = ${obtainedMarks} <br>`);
// document.write(`Percentage = ${Math.round(percentage)}% <br>`);

// if(percentage >= 80){
//     document.write("Grade = A+one" + "<br>");
//     document.write("Remarks = Excellent");
// } else if (percentage >= 70){
//     document.write("Grade = A" + "<br>");
//     document.write("Remarks = Good");
// } else if (percentage >= 60){
//     document.write("Grade = B" + "<br>");
//     document.write("Remarks = You need to improve");
// } else if (percentage < 60){
//     document.write("Fail" + "<br>");
//     document.write("Remarks = Sorry!");
// }

// Chapter No. 09 Q7

// var guessNumber = +window.prompt("Guess a number rangee from 1 to 10");
// var secretNumber = Math.floor((Math.random() * 10));

// if (secretNumber === guessNumber){
//     document.write("Bingo! Correct answer.");
// }
//  else if (secretNumber === guessNumber++){
//     document.write("Close enough to the correct answer.");
//  } else {
//     document.write("Wrong guess");
//  }

// Chapter No. 09 Q8

// var userInput = +window.prompt("Enter a number");

// if (userInput % 3 === 0){
//    document.write("The Number is divisible by 3");
// } else{
//    document.write("The Number is not divisible by 3");
// }

// Chapter No. 09 Q9

// var userInput = +window.prompt("Enter anumber to number is either odd or even");

// if (userInput % 2 === 0){
//    document.write("Number is even");
// } else{
//    document.write("Number is odd");
// }

// Chapter No. 09 Q10

// var userInput = +window.prompt("Enter Temperature");

// if(userInput >= 40){
//    document.write("It is too hot outside");
// } else if(userInput >= 30 && userInput < 40) {
//    document.write("The weather today is Normal");
// } else if(userInput >= 20 && userInput < 30){
//    document.write("Today's weather is cool");
// } else if(userInput >= 1 && userInput < 20){
//    document.write("OMG! Today's weather is so cool");
// }

// Chapter No. 09 Q11

// var firsrNumber = +window.prompt("Enter First Number");
// var secondNummber = +window.prompt("Enter Second Number");
// var operator = window.prompt("Enter Operator + , - , * , /");

// function num() {
//   document.write("First Number = " + firsrNumber + "<br>");
//   document.write("Second Number = " + secondNummber + "<br>");
// }

// if (operator === "+") {
//   num();
//   document.write(
//     `The addition of ${firsrNumber} & ${secondNummber} is ${
//       firsrNumber + secondNummber
//     }`
//   );
// } else if (operator === "-") {
//   num();
//   document.write(
//     `The Subtraction of ${firsrNumber} & ${secondNummber} is ${
//       firsrNumber - secondNummber
//     }`
//   );
// } else if (operator === "*") {
//   num();
//   document.write(
//     `The Multiplication of ${firsrNumber} & ${secondNummber} is ${
//       firsrNumber * secondNummber
//     }`
//   );
// } else if (operator === "/") {
//   num();
//   document.write(
//     `The Division of ${firsrNumber} & ${secondNummber} is ${
//       firsrNumber / secondNummber
//     }`
//   );
// }

// Chapter No. 012-13 Q1

// const userInput = prompt("Enter a character:");

// if (userInput.length !== 1) {
//   console.log("Invalid input. Please enter a single character.");
// } else {
//   const charCode = userInput.charCodeAt(0);

//   if (charCode >= 48 && charCode <= 57) {
//     console.log("Number");
//   } else if (charCode >= 65 && charCode <= 90) {
//     console.log("Uppercase Letter");
//   } else if (charCode >= 97 && charCode <= 122) {
//     console.log("Lowercase Letter");
//   } else {
//     console.log("Invalid input");
//   }
// }

// Chapter No. 012-13 Q2

// var userInput = +window.prompt("Enter a number");
// var userInput2 = +window.prompt("Enter Second Number");

// document.write(`Number 1 = ${userInput} <br> Number 2 = ${userInput2} <br>`);

// if (userInput === userInput2) {
//   document.write(`Numbers are Equals`);
// } else if (userInput > userInput2) {
//   document.write(`${userInput} is greater number`);
// } else {
//   document.write(`${userInput2} is greater number`);
// }

// Chapter No. 012-13 Q3

// var checkUserInput = +window.prompt("Enter a number");
// document.write(`Number = ${checkUserInput} <br>`);

// if (checkUserInput === 0){
//     document.write(`Number is Zero`);
// } else if (checkUserInput > 0){
//     document.write(`Number is positive`);
// } else{
//     document.write("Number is negative");
// }

// Chapter No. 012-13 Q4

// var checkUserInput = window.prompt("Enter a character");

// if ( checkUserInput.length !== 1){
//     document.write("Please enter single character");
// } else {
//     if(checkUserInput == 'a' || checkUserInput == 'e' || checkUserInput == 'i' || checkUserInput == 'o' || checkUserInput == 'u' || checkUserInput == 'A' || checkUserInput == 'E' || checkUserInput == 'I' || checkUserInput == 'O' || checkUserInput == 'U'){
//         console.log(true);
//     } else{
//         console.log(false);
//     }
// }

// Chapter No. 012-13 Q5

// var password = "myNameIsTanzeel";
// var entePassword = window.prompt("Enter Your Password");
// if (entePassword == ""){
//     document.write("Please Enter Your Password");
// } else{
//     if(password == entePassword){
//         document.write("You entered correct password");
//     } else{
//         document.write("Invalid Password");
//     }   
// }

// var time = +window.prompt("Enter Time in 24H");

// if (time >= 0000 && time < 1200){
//     console.log("Good Morning!");
// } else if (time >= 1200 && time < 1700){
//     console.log("Good Afternoon!");
// } else if(time >= 1700 && time < 2100){
//     console.log("Good Evening!");
// } else if (time >= 2100 && 2359){
//     console.log("Good Night!");
// }