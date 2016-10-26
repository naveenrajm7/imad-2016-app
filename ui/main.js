//counter code
var button =document.getElementById('counter');
    var counter=0;
    
button.onclick=function(){
    
    //creat a request object
    var request= new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
        }
        //not done yet
    };
    
    //make a request
    request.open('GET','http://naveenrajm7.imad.hasura-app.io/counter',true);
    request.send(null);
}; 


//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    //creat a request object
    var request= new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                //capture the list names and render it as a list
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                list+='<li>' +names[i]+'<li>';
            }
              var ul=document.getElementById('nmaelist');
            ul.innerHTML=list;
               
            }
        }
        //not done yet
    };
    
    //make a request
    request.open('GET','http://naveenrajm7.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
}; 
    //make request to the server and send the name
    
    //capture the list names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>' +names[i]+'<li>';
    }
    var ul=document.getElementById('nmaelist');
    ul.innerHTML=list;
};