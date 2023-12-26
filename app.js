
let login = prompt(" if you signing up ? or  ogging in ! or if you changing the password.")

if (login = "exit") {
    prompt(" if you signing up ? or  ogging in ! or if you changing the password.")
} if (login = "signup") {
    prompt(" Data of the following information ")


}

let Database = [
    {
        fullName: "azzaim",
        userName: "meryem",
        userEmail: "azzaimmeryem@gmail.com",
        userPassword: "password",
        userage: "age",
        Withdraw: 1000,
        Deposit: "",

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
prompt(userName.charAt(0).toUpperCase() + userName.slice(1));

// let namefullname = ` ${userName} ${fullName}`;
// prompt(namefullname);

//* parti 2  userEmail and password
let userEmail = prompt("insert your email ?")
for (let index = 0; index < userEmail.length; index++) {
    let element = userEmail[index];
    if (userEmail.length < 10) {
        userEmail = prompt(" insert your email the  userEmail should containe  10 characters !")

    }
    // else if (userEmail = ("@@")) {
    //     userEmail = prompt(" insert your email the  userEmail should containe  10 characters !")

    // }

} prompt(userEmail.toLocaleLowerCase());


let userage = prompt("What is  your real age ?")

if (userage.length >= 3) {
    userage = prompt(" insert your real age should containe 2 number?")


} else if (userage.length = ("string")) {
    prompt("  is not number?")


}
// (userage.length = ("string"))



let userPassword = prompt("insert your password  the  password should containe 7 characters")
while (userPassword.length <= 7) {
    userPassword = prompt("the  password should containe 7 characters !")

}
//*partie 3  Password_confirmed:
let connected = [];

const User = (password) => {

    let connectUser = Database.filter(element => (element.userPassword === password))
    console.log(connectUser);


    if (connected.length == 0 && connectUser) {
        connected.push(connectUser)
        console.log("you are connected");
    } else {
        alert("the  info  not match our")
    }

}


let loginPassword = prompt("Insert your password to login")
while (loginPassword.length == 0) {
    loginPassword = prompt("password Insert your password to login")
}

User(loginPassword)


let login2 = prompt(" if you signing up ? or  ogging in ! or if you changing the password.")

if (login2 = "exit") {
    prompt(" if you signing up ? or  ogging in ! or if you changing the password.")
} else {
    prompt(" Data of the following information ")
}

// let Withdraw = prompt(" Withdraw Money")
// if (Withdraw.length <=1000) {
//     Withdraw = prompt("can withdraw an amount from their bank")
// }
// else{
//     Withdraw = prompt(" you are can't withdraw an amount from their bank")

// }
let ask_option = prompt("Quel est votre option ?");
if (ask_option.length < 1000) {
    alert("Withdraw Money")
} else {
    alert("T")
}




