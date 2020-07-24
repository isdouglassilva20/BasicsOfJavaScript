
        var usuarios = [
            {
                nome: 'Douglas',
                idade: 20
            },
            {
                nome: 'Maria',
                idade: 12
            },
            {
                nome: 'José',
                idade: 23
            }
        ];

        usuario = {
            posicao: 0,
            get atual() {
                return usuarios[this.posicao]
            },
            set atual(posicao) {
                return this.posicao = posicao;
            },
            proximo() {
                ++this.posicao;
            },
            anterior() {
                --this.posicao;
            }
        };

        console.log(usuario.atual);
        usuario.proximo();

        console.log(usuario.atual);

        usuario.proximo();
        console.log(usuario.atual);

        usuario.anterior();
        console.log(usuario.atual);

        usuario.atual = 0
        console.log(usuario.atual);

        usuario.atual = 2
        console.log(usuario.atual);
