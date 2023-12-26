
let login = prompt(" if you signing up ? or  ogging in ! or if you changing the password.")

if (login = "exit") {
    prompt(" if you signing up ? or  ogging in ! or if you changing the password.")
} if (login = "signup") {
    prompt(" Data of the following information ")


}

let database = [
    {
        fullName: "",
        userName: "",
        userEmail: "fullName.userName@@gmail.com",
        userPassword: "password",

    }
];

//parti 1 fullName userName and userEmail

let fullName = prompt("what is your fullName ?")
prompt(fullName.charAt(0).toUpperCase() + fullName.substring(1));

let userName = prompt("what is your userName ?")

for (let index = 0; index < userName.length; index++) {
    let element = userName[index];
    while (userName.length < 5) {
        userName = prompt("the  userName should containe  5 characters ! ")
    }
    
}
prompt(userName.charAt(0).toUpperCase() + userName.substring(1));

let userEmail = prompt("insert your email ?")
for (let index = 0; index < userEmail.length; index++) {
    let element = userEmail[index];
    if (userEmail.length < 10) {
        userEmail = prompt(" insert your email the  userEmail should containe  10 characters !")

    } else if (userEmail = "") {
        userEmail = prompt(" insert your email the  userEmail should containe  10 characters !")


    }
}
prompt(userEmail.toLocaleLowerCase());



// let userPassword = prompt("insert your password  the  password should containe   8 characters")
// while (userPassword.length < 8) {
//     userPassword = prompt("the  password should containe   8 characters !")


// }