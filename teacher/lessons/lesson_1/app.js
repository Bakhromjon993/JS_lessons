let text = "Marufni telefon raqami: +998 99 011 08 95 | Eldorniki: +998715948956";
let matches = text.match(/\+998\s+[973][0-9]\s+[0-9]{3}\s+[0-9]{2}\s+[0-9]{2}/g);
console.log(matches);