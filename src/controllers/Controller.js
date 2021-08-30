const Profissional = require('../models/Profissional');


module.exports = {
    async register(req, res) {

        const { nome, email, genero, cep, nascimento, cpf, logradouro, numero, bairro, cidade, uf, profissao, estadocivil, rg, habilitacao, celular, complemento  } = req.body;

        const newProfissional = new Profissional();

        newProfissional.email = email;
        newProfissional.nome = nome;
        newProfissional.genero = genero;
        newProfissional.cep = cep;
        newProfissional.cpf = cpf;
        newProfissional.nascimento = nascimento;
        newProfissional.logradouro = logradouro;
        newProfissional.numero = numero;
        newProfissional.complemento = complemento;
        newProfissional.bairro = bairro;
        newProfissional.cidade = cidade;
        newProfissional.uf = uf;
        newProfissional.profissao = profissao;
        newProfissional.estadocivil = estadocivil;
        newProfissional.rg = rg;
        newProfissional.habilitacao = habilitacao;
        newProfissional.celular = celular;

        newProfissional.save((err, savedProfissional) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Tivemos um problema com o servidor :(');
            }

            return res.status(200).send(savedProfissional);
        });
    },



};