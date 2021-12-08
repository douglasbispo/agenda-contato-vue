new Vue({
    el: '#root',
    data: {
        contatos: [],
        error_nome: [],
        error_telefone: [],
        nome: null,
        telefone: null
    },
    methods: {
        adcionarContato: function (e) {
            this.error_nome = [];
            this.error_telefone = [];

            if (!this.nome) {
                this.error_nome.push("O nome deve ser preenchido");
            }

            if (!this.telefone) {
                this.error_telefone.push("O telefone deve ser preenchido");
            }

            if (!this.error_nome.length && !this.error_telefone.length) {
                this.contatos.push({ nome: this.nome, telefone: this.telefone })
            }


            e.preventDefault()
        }
    }
})


