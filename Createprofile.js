const name = document.getElementById('Username')
const password = document.getElementById('password')
const RepeatPassord = document.getElementById('RepeatPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
  let messages = []
  if (Username.value === '' || Username.value == null) {
    messages.push('Name is required')
  }
  if (password.value !== RepeatPassord.value){
    messages.push("Passwords don't macht")
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  if (messages.length = 0) {
    VerifyMail();
  }
  

})




function VerifyMail () {
  document.getElementById("ConfirmMail")  =   <button id = "Mail" type="Confirm">Verify your mail here </button>

}