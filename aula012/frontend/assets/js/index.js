class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Forumalario Enviado.');
            this.formulario.submit();
        }
    }


    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const repitirSenha = this.formulario.querySelector('.repitir-senha')

        if(senha.value !== repitirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repitir senhas precisam ser iguais')
            this.criaErro(repitirSenha, 'Campos senha e repitir senhas precisam ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12)

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            console.log(campo)
            if(!campo.value) {
                this.criaErro(campo, `${label} não pode estar em branco.`)
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsario(campo) {
        const usuario = campo.value;
        let valid = true;
        if(usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuario precia conter apenas letras e/ou números.')
            valid = false;
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        console.log(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
    }
    
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();