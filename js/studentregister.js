let pass = document.querySelector(".pass");
let eye = document.querySelector(".eye");

eye.addEventListener("click", btn);
function btn() {
if (pass.type == "password"){
    pass.type = "type"
    }else{
    pass.type = "password"

}


}