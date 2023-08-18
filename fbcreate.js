function check(){
    var a=document.getElementById('email').value;
    var b=document.getElementById('password').value;
    var c=document.getElementById('repassword').value;
    if(b==c&&b.length!=0){alert("Created Successfully")}
    else{alert("wrong pass")}

}