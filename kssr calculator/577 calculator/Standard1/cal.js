  
const buttons =document.querySelectorAll('button');
const display=document.querySelector('.display1');
let value1;
let tempvalue;

buttons.forEach(function(button){
    button.addEventListener('click',calcualte);});

function calcualte(event){
    const clickedButtonValue=event.target.value;

 
    if(clickedButtonValue=='=') 
    {
       if(display.value !=='')
       {
         tempvalue=display.value;
         value1=eval(tempvalue);
        if(value1<=100)
         {
          display.value=value1;
         }
         else if(value1>100)
         {
          window.alert("The total of number is extended more than 100");
         }
       }
      
    }
    else if(clickedButtonValue=='DEL')
    {
      display.value=display.value.slice(0,-1);
    }
    else if(clickedButtonValue =='C')
    {
     display.value='';
    } 
    else{
      display.value += clickedButtonValue;
    }
  }
  
  
