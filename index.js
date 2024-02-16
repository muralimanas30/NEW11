const login__image_button = document.getElementById("loginb123");
const login__back_button = document.getElementById("backb223");
const login__image_frame = document.getElementById("login--imageid");
const login__pop_frame = document.getElementById("login--popid");
const login__frame = document.getElementById("loginid");

login__image_button.onclick = function(){
    login__image_frame.style.display ="none";
    login__image_button.style.display="none";
    login__pop_frame.style.display="flex";
    login__pop_frame.style.translate="33px 30px";
    login__pop_frame.style.transition="all ease-in-out 0.3s";
}

login__back_button.onclick = function(){
    login__pop_frame.style.display="none";
    login__image_frame.style.display="inline-block";
    login__frame.style.display="flex";
    login__image_button.style.display="inline-block"
    login__frame.style.animation="bgzoom ease-in-out 15s alternate-reverse forwards infinite";
}
