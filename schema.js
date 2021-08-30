
import * as Yup from 'yup';


export default Yup.object().shape({
    nome:Yup.string().min(2).required(),
    email:Yup.string().email().required(),
    profissao:Yup.string().required(),
    nascimento:Yup.string().required(),
    estadocivil:Yup.string(),
    logradouro:Yup.string().required(),
    numero:Yup.string().required(),
    complemento: Yup.string(),
    bairro:Yup.string().required(),
    cidade:Yup.string().required(),
    celular: Yup.string().min(11).required(),
    genero: Yup.string().required(),
    cep: Yup.string().required(),
    cpf: Yup.string().required(),
    uf: Yup.string().required(),
    rg: Yup.string().required(),
    habilitacao: Yup.string(),
    
});