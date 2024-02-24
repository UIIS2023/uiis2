function ispisi(){
    var name=document.getElementById('name').value;
    var mail=document.getElementById('mail').value;
    var password=document.getElementById('password').value;
    if(name==='' || mail==='' || password===''){
        alert("Incorrect input!");
    }
    else{
        alert("Form submitted!");
    }
};