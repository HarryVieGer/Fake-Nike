const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick= function(){
    search.classList.toggle('active')
}
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}    
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
x.style.left='-400px';
y.style.left='380px';
z.style.left='110px';
}
function login()
{
x.style.left='360px';
y.style.left='-930px';
z.style.left='0px';
}