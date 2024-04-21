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

window.alert( 'Have a nice day!' )

const slider3 = document.getElementById("glider_3")

if(slider3){
    new Glide(slider3,{
        type: "carousel",
        startAt: 0,
        hoverPause:true,
        perView:1,
        animationDuration:800,
        animationTimingFunc:"ease-in-out",
    }).mount();
}

// ////////////////////////////
//  var noti = document.querySelector('h1');
//         var select= document.querySelector('select');
//         var button= document.getElementsByTagName('button');
//         for(var but of button{
//             but.addEventListener('click', (e)=>{
//                 var add = Number( noti.getAttribute('data-count'))
//             }
//         }

