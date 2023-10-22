import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random()*10);
type ansType={userGuess:number}
const answers: ansType= await inquirer.prompt([
    {type:"number", name:"userGuess",
    message:"write your Number 1-10"}
    ])
    const{userGuess}=answers;
if(userGuess===systemGeneratedNo){
    console.log("yes your answer is corret\n You Win")}
    else {console.log("Please Try Again") }
