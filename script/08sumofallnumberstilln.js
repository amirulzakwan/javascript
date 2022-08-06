console.log("Sum of all numbers till m")

var m = 5
//find the sum of all numebr till n -> 5
var sum = 0
while(m > 0){
    sum = sum + m
    m = m-1
    //m--
}

console.log("Sum of all numbers till " + m)
console.log(sum);


//capture n using prompt
//use for loop in place of while loop

//Caution:
//do not save the code
//show it to me and then run it
//10 min to do this

var o = prompt("The number is: ")
console.log("The input number is: " + o)
n = parseInt(o)
//find the sum of all number till n -> 5
for(var sum=0; n>0; n=n-1){
  sum=sum+n
    
}console.log("The sum of all numbers till " + o + " is " + sum)