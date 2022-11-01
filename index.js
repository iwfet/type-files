function detectMimeType(b64){
    const signatures= require('./file.types.json') 
    for (var s in signatures) {     
        if (b64.indexOf(s) === 0) {
        return signatures[s];
        }
    }
}
module.exports ={detectMimeType}