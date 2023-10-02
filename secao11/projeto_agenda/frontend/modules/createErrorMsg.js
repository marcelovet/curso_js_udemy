export default function createErrorMsg (type, removeOnValid = false) {
  let msgText = ''
  if (type === 'firstname') {
    msgText = 'Campo de preenchimento obrigatorio'
  }
  if (type === 'password') {
    msgText = 'A senha precisa ter entre 3 e 50 caracteres'
  }
  if (type === 'email') {
    msgText = 'E-mail invalido'
  }
  if (type === 'required-email' || type === 'required-phone') {
    msgText = 'Contato deve ter telefone ou email'
  }
  
  let msgElement = document.querySelector(`#error-${type}`)
  if (msgElement && removeOnValid) return msgElement.remove()
  if (msgElement) msgElement.remove()
  msgElement = document.createElement('p')
  msgElement.innerText = msgText
  msgElement.classList.add('alert', 'alert-danger', 'my-3')
  msgElement.setAttribute("id", `error-${type}`)
  return msgElement
  
}