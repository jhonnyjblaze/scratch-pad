/*M1D3 HOMEWORK: range()

Create a function called range that takes two integers as 
parameters and returns an Array containing all integers 
between the two parameters, inclusively.  For example:

range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]

BONUS: If the first argument is greater than the second, 
return the range in reverse order, ie:

range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]

TIPS:

* create something to collect the output you'll return.
* you'll need a loop, which one is best?
* you'll wanna make use of the push() method of Array.
*/

/*M1D3 HOMEWORK: range()

Create a function called range that takes two integers as 
parameters and returns an Array containing all integers 
between the two parameters, inclusively.  For example:

range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]

BONUS: If the first argument is greater than the second, 
return the range in reverse order, ie:

range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]

TIPS:

* create something to collect the output you'll return.
* you'll need a loop, which one is best?
* you'll wanna make use of the push() method of Array.
*/


/*defines a function named range() with two integers as the parameters 
start & end. range() contains a block of code that declares the local variable 
output then assigns it to an empty array []. Next there is an if statement that 
checks whether the parameter start is less than the parameter end. If true a 
for loop begins to add 1 to the integer in the start parameter for as long as 
the start parameter is less than the end parameter. After each iteration of the 
loop the integer in the start parameter is pushed to the array output for as 
long as start < end.
*/

function range(start, end) {                  
  var output = [];                  
  if (start < end) {                        
    for (var i = start; i < end + 1; i++) {
      output.push(i);
    }
  }

/*If start is > end then an else statement executes/calls a for loop to 
subtract 1 from the integer in the end parameter for as long as the start 
parameter is greater than the end parameter. After each iteration of the 
loop the integer in the start parameter is pushed to the array output for 
as long as start > end.
*/
  
  else {
    for (var j = start; j > end - 1; j--) { 
      output.push(j);
    }
  }
    return output;
}

/*inspects the function range() with the integers 9 & 18 passed in as 
arguements for the parameters (start, end).
*/
console.log(range(9, 18));      

/*inspects the function range() with the integers 18 & 9 passed in as 
arguements for the parameters (start, end).
*/
console.log(range(18, 9));                    





/* defines a function called range with the parameters start & end. The block of code inside the function first declares a local variable named output and assigns an empty array to it. Then it uses a for loop to push each integer from the start parameter value through to the end parameter value on to the empty array output. Then the function returns the array output complete with a list of all the integers from the start parameter through to the end parameter.
*/

/*
function range(start, end) { 
  var output = [];        
  for (var i = start; i < end + 1; i ++) {
    output.push(i);
  }
  return output;
}
*/

/* declares the variable output then assigns to it the fucntion range with the arguements 9 & 18 passed into it. 
*/

//var output = range(9, 18);

/* inspects the variable output and displays [9, 10, 11, 12, 13, 14, 15,    16, 17, 18] 
*/

//console.log(output);  

/*
function range(end, start) {
  var outputs = [];
  for (var i = end; i > start - 1; i--) {
    outputs.push(i);
  }
  return outputs;
}
*/

/* declares the variable outputs then assigns to it the function range with the arguements 18 & 9 passed into it.
*/

//var outputs = range(18, 9);

/* inspects the variable outputs and displays [18, 17, 16, 15, 14, 13, 12, 11, 10, 9] 
*/

//console.log(outputs);

/* I get why I can get both arrays to display when the problem is solved by one 
function. But, why can I not get both arrays to display when each array has its 
own function?
*/
