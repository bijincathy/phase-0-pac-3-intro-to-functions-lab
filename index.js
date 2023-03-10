function shout(string) {
 return string.toUpperCase();   
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    if (/^[A-Z]+$/.test(string)) {
        return "YES INDEED!"
    } else if (string === "Let's have dinner together!") {
        return "I would love to!"
} else if (/^[a-z]+$/.test(string)) {
    return "I can't hear you!"
}
    
    
}