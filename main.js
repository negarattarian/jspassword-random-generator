function creatpass(){
  const  pass = document.getElementById("Password");
  const lenght = 14;
   let password = "";

     const chars =
      "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 1; i <= lenght; i++) {
      var rand=Math.floor(Math.random()*chars.length);
      password+=chars.substring(rand,rand+1);
    }
pass.value = password;
  
  }
function copypassword(){
const pass = document.getElementById("Password");
 pass.select();
navigator.clipboard.writeText(pass.value);
 console.log(pass.value);
}
