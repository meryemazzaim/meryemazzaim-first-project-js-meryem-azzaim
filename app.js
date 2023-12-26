
let login = prompt(" if you signing up ? or  ogging in ! or if you changing the password.")

if (login = "exit") {
    prompt(" if you signing up ? or  ogging in ! or if you changing the password.")
} if (login = "signup") {
    prompt(" Data of the following information ")


}

let database = [
    {
        fullName: "azzaim",
        userName: "meryem",
        userEmail: "azzaim.userName@@gmail.com",
        userPassword: "password",
        userage: 15,

    }
];

//*parti 1 fullName userName  

let fullName = prompt("what is your fullName ?")
prompt(fullName.charAt(0).toUpperCase() + fullName.substring(1));

let userName = prompt("what is your userName ?")

while (userName.length < 5) {
    userName = prompt("the  userName should containe  5 characters ! ")
}

// userName = userName.trim()
prompt(userName.charAt(0).toUpperCase() + userName.substring(1));


//* parti 2  userEmail
let userEmail = prompt("insert your email ?")
for (let index = 0; index < userEmail.length; index++) {
    let element = userEmail[index];
    if (userEmail.length < 10) {
        userEmail = prompt(" insert your email the  userEmail should containe  10 characters !")

    }
    //   else if (userEmail = ("@@")) {


    // }

}
prompt(userEmail.toLocaleLowerCase());

let userage = prompt("What is  your real age ?")

if (userage.length <=3 ) {
    prompt("userage should containe 2 number ?")


    
} else if (userage.length=0) {
    prompt(" entre your real age?")

    
}








let userPassword = prompt("insert your password  the  password should containe 7 characters")
while (userPassword.length < 7 ){
    userPassword = prompt("the  password should containe 7 characters !")


}