/*
Write a program that uses an array(s) to keep track of
employees and the number of years they have been at the
company. Use the data below.
Then let the user add a new employee and years
of service, and delete the last employee added using an array method.
You must use array(s), array method(s), for loop(s), and if/else
statement(s).
Output to the console: 
> the array(s), one name per line, before data has been changed
> the array(s) after a new employee has been added
> the array(s) after the last employee has been deleted.

Use this data:
  Mary Edwards, 22 years, Don Smith, 10 years, Tricia Evans, 5 years
*/

// Code
/*
let employees = ['Mary Edwards, 22 years', 'Don Smith, 10 years', 'Tricia Evans, 5 years']
for (i = 0; i < employees.length; i++)
    console.log(`${employees[i]}`)

let additionalEmployee = prompt("Would you like to add a new employee? (Yes or No)")
if (additionalEmployee == "Yes") {

let employeeName = prompt("Enter the first and last name of the employee you would like to add.")
let employeeTenure = Number(prompt("Enter the duration, in years, that the employee has held their position at the company."))

  employees.push(`${employeeName}, ${employeeTenure}`)
    console.log(`${employees}`)
} else {
    additionalEmployee == "No"
}

let deleteEmployee = prompt("Would you like to delete the last employee? (Yes or No)")
if (deleteEmployee == "Yes") {
employees.pop()
  console.log(`${employees}`)
} else {
  deleteEmployee = "No"
}
*/