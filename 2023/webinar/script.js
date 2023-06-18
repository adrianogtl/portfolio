document.querySelector('input#cadastrar').addEventListener('click', confirmacao)
function confirmacao() {
    const nome = document.getElementById('name')
    const sobrenome = document.getElementById('lastname')
    const email = document.getElementById('email')
    if (nome.value.length >= 2 && sobrenome.value.length >= 2 && email.value.length > 0) {
        alert('Você foi cadastrado com sucesso!')
    } else {
        alert('Preencha corretamente dos dados!')
    }
}