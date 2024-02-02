function compareNumber(){

    var first= document.getElementById('firstNum').value;
    var second=document.getElementById('secondNum').value;
    
    
    
    f=parseInt(first);
    s=parseInt(second);
    
    let ans=0;
    
    if(f<=1000 && s<=1000){
        if(f>s){
            ans="the number "+ f + " is bigger than " + s; 
        }
    
        else if(s>f)
        {
            ans="the number " + s + " is bigger than "+ f; 
        }
        else if(s==f)
        {
            ans="the number " + s +" is equal " + f; 
        }
    
        else
        {
    
        }
    document.getElementById("Answer1").innerHTML=ans; 
    }
    
    else if(f>1000 && s>1000){
        window.alert("The value of first number and second number is extend more than 100");
    }
    else if(f>1000 && s<1000){
        window.alert("The value of first number is extended more than 100");
    }
    else if(f<1000 && s>1000){
        window.alert("The value of second number is extended more then 100");
    }
    else{
        window.alert("Please Enter both value");
    }
    
    
    
    
    }