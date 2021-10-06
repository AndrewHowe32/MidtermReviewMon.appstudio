/*
There are three sizes of poodles: standard, miniature, and toy. Write a program that asks the user what size their poodle is. The user must use the words: standard, miniature, or toy.  However, they can use whatever case they want
(eg. TOY, Toy, toy, etc). Also, let the user say how many times they want to run the program. You must use a while loop and no more than 2 if/elses. Let the user decide how many times they want to run the program. 
Output the appropriate message in a popup using this format: 
      Toy dogs are so tiny. 
or   
      Miniature dogs are very small but very hardy. 
or
     Standard dogs are really very large. 
*/

// Code

let poodleSize = []
let questionOne = false
let askQuestionOne = ""

let i = 0
  
while (questionOne == false) {

  askQuestionOne = prompt("Do you want to add a new size selection for your poodle? (Yes or No)")
  if (askQuestionOne == "Yes") {
  questionOne = false
  newItem = prompt("Please enter one of the following sizes: standard, miniature, or toy.")
    size = newItem.toLowerCase()
        if (size == "standard") {
            console.log("Standard dogs are really very large.")
        } else if (size == "miniature") {
            console.log("Miniature dogs are very small but very hardy.")
        } else if (size == "toy") {
            console.log("Toy dogs are so tiny.")
          }
} else {
    
    questionOne = true
    }
}
