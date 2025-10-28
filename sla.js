const avanca = document.querySelectorAll('.btn-proximao')
console.log(avanca)

avanca.forEach(button => {
    button.addEventListener('click', funcion(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    })
})