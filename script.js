//conditionals: calculating number of people in a bus

let n = 30;

if (n < 30){
    console.log("The bus is not full")
}else{
    console.log("The bus is full")
}

let heading = document.getElementById('first');
heading.textContent = "Calculator";
heading.style.textAlign = 'center';
heading.style.color = 'red';

document.body.style.backgroundColor = "yellow";
document.body.style.textAlign = "center";


//finding the sum of numbers
document.writeln("<h2>" + "Sum of Numbers" + "<br>" + "</h2>")

function sumNumbers(){
let number = parseInt((prompt('Please enter number to add')))
for (let i = 1; i <= 10; i++) {
  const result = number + i;
  document.writeln(`${number} + ${i} = ${result}` + "<br>");
}
    }

 
sumNumbers()
//finding the product of numbers
document.writeln("<h2>" + "Product of Numbers" + "<br>" + "</h2>")

function productNumbers(){
let number = parseInt((prompt('Please enter number to multiply')))
let i = 1;
while (i <= 10 ) {
  
  const result = number + i;
  document.writeln(`${number} x ${i} = ${result}` + "<br>");
  i++
}
    }

 
productNumbers()






