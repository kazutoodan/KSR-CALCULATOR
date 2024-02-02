const buttons =document.querySelectorAll('button');
        
       buttons.forEach(function(button){
        button.addEventListener('click',show);});
        
        function show(event){
        const selection=event.target.value;    
        let image=document.getElementById("display");

        if(selection=="half"){
        
            image.src="half.png";
            }   
        else if(selection=="quater"){
            image.src="quarter.png";
            }
          }