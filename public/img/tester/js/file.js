window.onscroll=function(){myFunction()};
var navbar =document.getElementById("nnv");
var navbarH =document.getElementById("nnv").offsetHeight;
console.log(navbarH);
function myFunction(){
    if(window.pageYOffset>=navbarH){
        console.log(window.pageYOffset);
        navbar.classList.add('stick');
    

    }else{
        navbar.classList.remove('stick'); 
    }
}
