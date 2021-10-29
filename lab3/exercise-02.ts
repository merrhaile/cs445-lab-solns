
type bankAcc = {
    money:number
    deposit(value:number):void
}

let bankAccount:bankAcc = {
    money:2000,
    deposit(value){
        this.money += value
    }
};

type mySelf = {
    name:string
    bankAccount:bankAcc
    hobbies:string[]
}
let myself: mySelf = {
    name: "John",
    bankAccount: bankAccount,
    hobbies:["voilin", "cooking"]
}

myself.bankAccount.deposit(3000)
console.log(myself)