function submitForm() {
    var Name = document.getElementById("name").value;
    console.log(Name);
    var Email = document.getElementById("email").value;
    console.log(Email);
   
    var address = document.getElementById("address").value;
    console.log(address);
    var gender = document.getElementById("gender").value;
  
}
submitForm();
/*const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  const data = new FormData(form);
  console.log(data);
    

})*/
