const go =document.getElementById("go");
go.addEventListener("click",option);

  function option(){
    let selection=document.getElementById('selection').value;

    if(selection=="*")
    {
     a=multiply();
     return a;
    }
    else if(selection=="/")
    {
      b=division()
      return b;
    }
    else if(selection=="+")
    {
      c=addition();
      return c;
    }
    else if(selection=="-")
    {
     d=subtraction();
     return d;
    }
    else
    {
      e="invalid option";
    } 
  }
  function multiply()
  {
    Number1=parseInt(document.getElementById('n1').value);
    Number2=parseInt(document.getElementById('n2').value);
    Number3=parseInt(document.getElementById('n3').value);
    Number4=parseInt(document.getElementById('n4').value);
    
    let Topnum=(Number1*Number2);
    let Botnum=(Number3*Number4);
    let Adivisor=simplyfied(Topnum,Botnum);
    let UnTopnum=Topnum;
    let UnBotnum=Botnum;

    Topnum=Topnum/Adivisor;
    Botnum=Botnum/Adivisor;

    if(Topnum!=UnTopnum  && Botnum!=UnBotnum)
    {
    document.getElementById("message").innerHTML="THIS IS UNSIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    document.getElementById("message2").innerHTML="THIS IS SIMPLIFIED FORM:";
    document.getElementById("DisTop").innerHTML=Topnum;
    document.getElementById("Divider2").innerHTML="<hr>";
    document.getElementById("DisBot").innerHTML=Botnum;
    }
    else{
    document.getElementById("message").innerHTML="THERE IS NO SIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    }

  }

  function addition()
  {
    Number1=parseInt(document.getElementById('n1').value);
    Number2=parseInt(document.getElementById('n2').value);
    Number3=parseInt(document.getElementById('n3').value);
    Number4=parseInt(document.getElementById('n4').value);
    
    let Topnum;
    let Botnum;
    
    if(Number3!=Number4)
    {
      Topnum=((Number1*Number4)+(Number2*Number3));
      Botnum=Number3*Number4;
    }
    else 
    {
      Topnum=Number1+Number2;
      Botnum=Number3;
    }
    let UnTopnum=Topnum;
    let UnBotnum=Botnum;

    let Adivisor=simplyfied(Topnum,Botnum);

    Topnum=Topnum/Adivisor;
    Botnum=Botnum/Adivisor;

    if(Topnum!=UnTopnum  && Botnum!=UnBotnum)
    {
    document.getElementById("message").innerHTML="THIS IS UNSIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    document.getElementById("message2").innerHTML="THIS IS SIMPLIFIED FORM:";
    document.getElementById("DisTop").innerHTML=Topnum;
    document.getElementById("Divider2").innerHTML="<hr>";
    document.getElementById("DisBot").innerHTML=Botnum;
    }
    else{
    document.getElementById("message").innerHTML="THERE IS NO SIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    }
   
  }

  function subtraction()
  {
    Number1=parseInt(document.getElementById('n1').value);
    Number2=parseInt(document.getElementById('n2').value);
    Number3=parseInt(document.getElementById('n3').value);
    Number4=parseInt(document.getElementById('n4').value);
    
    let Topnum;
    let Botnum;

    if(Number3!=Number4)
    {
      Topnum=((Number1*Number4)-(Number2*Number3));
      Botnum=Number3*Number4;
    }
    else 
    {
      Topnum=Number1-Number2;
      Botnum=Number3;
    }

    let UnTopnum=Topnum;
    let UnBotnum=Botnum;

    let Adivisor=simplyfied(Topnum,Botnum);
    
   

    Topnum=Topnum/Adivisor;
    Botnum=Botnum/Adivisor;

    if(Topnum!=UnTopnum  && Botnum!=UnBotnum)
    {
    document.getElementById("message").innerHTML="THIS IS UNSIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    document.getElementById("message2").innerHTML="THIS IS SIMPLIFIED FORM:";
    document.getElementById("DisTop").innerHTML=Topnum;
    document.getElementById("Divider2").innerHTML="<hr>";
    document.getElementById("DisBot").innerHTML=Botnum;
    }
    else{
    document.getElementById("message").innerHTML="THERE IS NO SIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    }
  }

  function division()
  {
    Number1=parseInt(document.getElementById('n1').value);
    Number2=parseInt(document.getElementById('n2').value);
    Number3=parseInt(document.getElementById('n3').value);
    Number4=parseInt(document.getElementById('n4').value);

    let Topnum=Number1*Number4;
    let Botnum=Number3*Number2;
    
    let UnTopnum=Topnum;
    let UnBotnum=Botnum;

    let Adivisor=simplyfied(Topnum,Botnum);

    Topnum=Topnum/Adivisor;
    Botnum=Botnum/Adivisor;

    if(Topnum!=UnTopnum  && Botnum!=UnBotnum)
    {
    document.getElementById("message").innerHTML="THIS IS UNSIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    document.getElementById("message2").innerHTML="THIS IS SIMPLIFIED FORM:";
    document.getElementById("DisTop").innerHTML=Topnum;
    document.getElementById("Divider2").innerHTML="<hr>";
    document.getElementById("DisBot").innerHTML=Botnum;
    }
    else{
    document.getElementById("message").innerHTML="THERE IS NO SIMPLIFIED FORM:"; 
    document.getElementById("UnDisTop").innerHTML=UnTopnum;
    document.getElementById("Divider").innerHTML="<hr>";
    document.getElementById("UnDisBot").innerHTML=UnBotnum;
 
    }

  }
  
  function simplyfied(a,b)
  {
    var R;
    while ((a % b) > 0)  {
      R = a % b;
      a = b;
      b = R;
    }
    return b;  
  }
