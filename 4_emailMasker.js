let email = "ucemcjuce@email.com";

const maskEmail = (email) => {

    const splitEmail = email.slice(0, email.indexOf("@"));
    const domain = email.slice(email.indexOf("@"));
    
    // get the first character. asterisk the rest up until the second last character then add the last character
    const asterisk = splitEmail[0] + "*".repeat(splitEmail.length - 2) + splitEmail[splitEmail.length - 1];
    
    return asterisk + domain;

    
}
console.log(maskEmail(email));