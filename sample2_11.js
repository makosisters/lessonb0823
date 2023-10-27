let user = "noguchi";
let age = 20;
let isTeacher = true;

let result = false || false;

console.log(result);

if (0 || 1) {
    console.log("true");
}

let hour = 12;

if (hour < 10 || hour > 18) {
    console.log( "closed ");
}

console.log( undefined || null || 0 );

let firstName = "";
let lastName = "";
let nickName = "";

console.log( firstName || lastName || nickName || "anonymous");

console.log( false && true );

let minute = 31; 

if (hour == 12 && minute == 30) {
    console.log( "Time is 12:30");
}

console.log( 1 && 0);
console.log( 1 && 2 && null && 3);

console.log( !false);