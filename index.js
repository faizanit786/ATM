#! /usr/bin/env node
import inquirer from "inquirer";
let amount = 10000;
let Pin = 4015;
console.clear();
console.log("========== CLI - ATM- MACHINE =========");
let answers = await inquirer.prompt([{
        name: "atmPin",
        type: "number",
        message: `Enter ATM Pin Code \t hint ["1234"]`
    }]);
console.log(answers.atmPin);
if (answers.atmPin === Pin) {
    let answers2;
    do {
        console.clear();
        console.log("========== CLI - ATM- MACHINE =========");
        console.log("--------Welcome Faizan Ali------- \n");
        answers2 = await inquirer.prompt([{
                name: "options",
                message: " Select Options ",
                type: "list",
                choices: ['Check_Balance', 'Deposit_Cash', 'Withdraw_Cash', 'Exit']
            }]);
        if (answers2.options == "Check_Balance") {
            let answers3;
            do {
                console.clear();
                console.log("========== CLI - ATM- MACHINE =========");
                console.log("--------Welcome Faizan Ali------- \n");
                console.log("***** CHECK BALANCE ***** \n");
                console.log(`You have ${amount} Rs in Your Bank Account \n \n`);
                answers3 = await inquirer.prompt([{
                        name: "back",
                        message: " Select Options ",
                        type: "list",
                        choices: ['Back']
                    }]);
            } while (answers3.back != "Back");
        }
        else if (answers2.options == "Deposit_Cash") {
            let answers3;
            do {
                console.clear();
                console.log("========== CLI - ATM- MACHINE =========");
                console.log("--------Welcome Faizan Ali------- \n");
                console.log("***** DEPOSIT CASH ***** \n");
                let deposit = await inquirer.prompt([{
                        name: "depositedAmount",
                        type: "number",
                        message: ` Enter Amount You Want to deposit`
                    }]);
                if (deposit.depositedAmount > 0) {
                    amount += deposit.depositedAmount;
                    console.log(`${deposit.depositedAmount} Rupees has been deposited now Your account balance is ${amount} Rupees \n`);
                }
                else {
                    console.log("please enter a valid Number");
                }
                answers3 = await inquirer.prompt([{
                        name: "back",
                        message: " Select Options ",
                        type: "list",
                        choices: ['Continue', 'Back']
                    }]);
            } while (answers3.back != "Back");
        }
        else if (answers2.options == "Withdraw_Cash") {
            let answers3;
            do {
                console.clear();
                console.log("========== CLI - ATM- MACHINE =========");
                console.log("--------Welcome Faizan Ali------- \n");
                console.log("***** WITHDRAW CASH ***** \n");
                let withdraw = await inquirer.prompt([{
                        name: "withdrawAmount",
                        type: "number",
                        message: ` Enter Amount You Want to Withdraw  from ${amount} Rupees`
                    }]);
                if (withdraw.withdrawAmount < amount && withdraw.withdrawAmount > 0) {
                    amount -= withdraw.withdrawAmount;
                    console.log(`${withdraw.withdrawAmount} Rupees has been withdrawn, now Your account balance is ${amount} Rupees \n`);
                }
                else {
                    console.log("please enter a valid Number");
                }
                answers3 = await inquirer.prompt([{
                        name: "back",
                        message: " Select Options ",
                        type: "list",
                        choices: ['Continue', 'Back']
                    }]);
            } while (answers3.back != "Back");
        }
        else if (answers2.options == "Exit") {
            console.log("==== THANK YOU ===");
        }
    } while (answers2.options != 'Exit');
}
else {
    console.log("Invalid Pin");
}
