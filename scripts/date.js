const now = new Date();
const day = now.getDate();
const year = now.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
let suffix;
switch (day) {
    case 1:
    case 21:
    case 31:
        suffix = "st";
        break;
    case 2:
    case 22:
        suffix = "nd";
        break;
    case 3:
    case 23:
        suffix = "rd";
        break;
    default:
        suffix = "th";
}
document.getElementById("date").innerHTML = monthNames[now.getMonth()] + " " + day + suffix + ", " + year;