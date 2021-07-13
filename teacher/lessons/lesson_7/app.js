let time = new Date().getHours();
let message = "";

switch (time) {
    case 10:
        message = "Time is 10";
    case 9:
        message = "Time is 9";
    case 8:
        message = "Time is 8";
    default:
        message = "Time is not exist";
}

if (time === 10) {
    message = "Time is 10";
} else if (time === 9) {
    message = "Time is 9";
} else if (time === 8) {
    message = "Time is 8";
} else {
    message = "Time is not exist";
}