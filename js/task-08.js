const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  
    const {elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields!");
      return;
    }
  const userMail = event.currentTarget.elements.email.value;
  const userPass = event.currentTarget.elements.password.value;
  const userData = { userMail, userPass };
  console.log(userData);
  event.currentTarget.reset();
}

