function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function toLowerCase(str) {
    return str.toLowerCase(); 
}

function toUpperCase(str) {
    return str.toUpperCase();
}