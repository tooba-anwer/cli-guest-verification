#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Guest Verification Center");
let myLoop = true;
let myInvitedGuestList = ["Tania", "Hamna", "Hadia", "Aliya", "Bushra", "Eshal", "Fariha"];
while (myLoop) {
    let userInput = await inquirer.prompt({
        type: "input",
        name: "userName",
        message: "please enter your name"
    });
    let guestName = userInput.userName;
    // let {userName} = userInput;
    // console.log(guestName);
    let lowerGuestName = guestName.toLowerCase();
    if (myInvitedGuestList.includes(guestName)) {
        console.log(`Welcome Ms. ${guestName}! please make yourself comfortable`);
        myLoop = false;
    }
    else {
        console.log(`sorry Ms. ${guestName}. Your name is not on the GuestList for today. \n`);
        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name: 'otherName',
            message: 'Do you have another name you go by? if so, we can check again!',
            default: false
        });
        if (askNameAgain.otherName == false) {
            myLoop = false;
            console.log(`\nWe apologize, but you are not on the guest list. Please contact the event organizer.\n`);
        }
    }
}
