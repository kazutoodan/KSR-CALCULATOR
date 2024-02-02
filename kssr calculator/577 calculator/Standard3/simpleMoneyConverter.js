const go =document.getElementById("calc");
go.addEventListener("click",option);

function option(){
let selection=document.getElementById('selection').value;

if(selection=="brunei")
    {
     a=brunei();
     return a;
   
    }
else if(selection=="cambodia")
    {
      b=cambodia()
      return b;
    }
else if(selection=="laos")
    {
      c=laos();
      return c;
    }
else if(selection=="mynmar")
    {
     d=mynmar();
     return d;
    }

else if( selection=="philipines")
    {
      e=philipines();
      return e;
    } 
else if(selection=="singapore")
    {
      f=singapore();
      return f;
    }
else if(selection=="thailand")
    {
      g=thailand();
      return g;
    }
else if(selection=="vietnam")
    {
      h=vietnam();
      return h;
    } 

 function brunei(){
    var input=document.getElementById('input').value; 
    const b_Currentcy=0.32;
    var converted=0;

    converted=input* b_Currentcy;

    document.getElementById("answer2").innerHTML="The rate between brunei and malaysian ringgit are "+b_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted+" BND"; 
  } 

  function cambodia(){
    var input=document.getElementById('input').value; 
    const C_Currentcy=918.56;
    var converted=0;

    converted=input* C_Currentcy;
    document.getElementById("answer2").innerHTML="The rate between combodia and malaysian ringgit are " + C_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted+" KHR"; 
  }  
  
  function laos(){
    var input=document.getElementById('input').value; 
    const L_Currentcy=3380.25;
    var converted=0;

    converted=input* L_Currentcy;
    document.getElementById("answer2").innerHTML="The rate between laos and malaysian ringgit are "+ L_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted+" LAK"; 
  } 

  function mynmar(){
    var input=document.getElementById('input').value; 
    const M_Currentcy=416.33;
    var converted=0;

    converted=input* M_Currentcy;
    document.getElementById("answer2").innerHTML="The rate between mynmar and malaysian ringgit are "+M_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted+" MMK"; 
  } 

  function philipines(){
    var input=document.getElementById('input').value; 
    const P_Currentcy=12.65;
    var converted=0;

    converted=input* P_Currentcy;
    document.getElementById("answer2").innerHTML="The rate between philipines and malaysian ringgit are "+ P_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted +" PHP"; 
  } 

  function thailand(){
    var input=document.getElementById('input').value; 
    const T_Currentcy=416.33;
    var converted=0;

    converted=input* T_Currentcy;
    document.getElementById("answer2").innerHTML="The rate between thailand and malaysian ringgit are "+ T_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted +" PHP"; 
  }
  function vietnam(){
    var input=document.getElementById('input').value; 
    const V_Currentcy=5271.97;
    var converted=0;

    converted=input* V_Currentcy;
    document.getElementById("answer2").innerHTML="The rate between brunei and malaysian ringgit are "+V_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted +" VND"; 
  }

  function singapore(){
    var input=document.getElementById('input').value; 
    const S_Currentcy=0.31;
    var converted=0;

    converted=input* S_Currentcy;
    document.getElementById("answer2").innerHTML="The rate between brunei and malaysian ringgit are "+ S_Currentcy;
    document.getElementById("answer").innerHTML="The value after convert are = "+converted +" SGD"; 
  }  
}