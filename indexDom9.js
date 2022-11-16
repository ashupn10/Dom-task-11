let form = document.getElementById('form');
let input=form.querySelectorAll('input');
function myobj(username,email){
    this.username=username;
    this.email=email;
}
// console.log(user);
input[2].addEventListener('click',()=>{
    let username=input[0].value;
    let email=input[1].value;
    let user=JSON.stringify(new myobj(username,email));
    localStorage.setItem('user',user);
})
