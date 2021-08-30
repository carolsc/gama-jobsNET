const mongoose = require('mongoose');

const ProfissionalSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    genero: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    nascimento: {type: String, unique: false, required: true},
    cpf: {type: String, unique: true, required: true},
    logradouro: {type: String, unique: false, required:true},
    numero: {type: String, unique: false, required:true },
    complemento: {type:String, unique:false, required:false},
    bairro: {type: String, unique:false, required:true},
    cidade: {type: String, unique: false, required: true},
    uf: {type:String, unique:false, required: true},
    profissao:{type:String, unique:false, required:true},
    estadocivil: {type:String, unique:false, required:false},
    rg: {type:String, unique:true, required:false},
    habilitacao: {type:String, unique:false, required:false},
    celular: {type:String, unique:false, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Profissional', ProfissionalSchema);