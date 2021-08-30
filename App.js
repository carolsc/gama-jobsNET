import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schema from './schema.js';

function App() {
  
  function onSubmit(values, actions){
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if(cep?.length !== 8){
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data)=> {
      setFieldValue('logradouro', data.logradouro);
      setFieldValue('bairro', data.bairro);
      setFieldValue('cidade', data.localidade);
      setFieldValue('uf', data.uf);
      
    });
  }
  const onSubmit = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:5000/register', form);
      if (user.status === 200) {
        alert('Enviado com sucesso!');
      }

    } catch (error) {
      setCpfError(true);
    }
  };
   return (
    <div className="App">
      <header className="header">
      <img src="./jobsnetlogo.png" alt="logo"/>
      <h1>Inscreva-se Agora</h1>
      </header>
      
      <Formik 
        validationSchema={schema}
        onSubmit = {onSubmit}
        validateOnMount
        initialValues={{
          nome:'',
          email:'',
          genero:'',
          cep: '',
          nascimento: '',
          cpf:'',
          logradouro:'',
          numero:'',
          complemento:'',
          bairro:'',
          cidade:'',
          uf:'',
          profissao:'',
          estadocivil:'',
          rg:'',
          habilitacao:'',
          celular:''
          
        }}
          render={({isValid, setFieldValue})=> (
          <Form id="form">
            <div className="form-control-group">
              <label>Nome Completo</label>
              <Field id="nome" name="name" type="text" />
              <ErrorMessage name="name"/>
            </div> 
            <div className="form-control-group">
              <label>Gênero</label>
              <Field name="genero" type="text" />
              <ErrorMessage name="genero"/>
            </div> 
            <div className="form-control-group">
              <label>Cargo Pretendido</label>
              <Field name="cargo" type="text" />
              <ErrorMessage name="profissao"/>
            </div> 
            <div className="form-control-group">
              <label>Data de Nascimento</label>
              <Field name="nascimento" type="text"/>
              <ErrorMessage name="nascimento"/>
            </div> 
            <div className="form-control-group">
              <label>Estado Civil</label>
              <Field component="select" name="estadocivil" />
              <option value={null}>Selecione</option>
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value = "divorciado">Divorciado</option>
                <option value="viuvo">Viúvo</option>
              <ErrorMessage name="estadocivil"/>
            </div> 
            <div className="form-control-group">
              <label htmlFor="cep">CEP</label>
              <Field id="cep"name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)}/>
              <ErrorMessage name="cep"/>
            </div>
            <div className="form-control-group">
              <label>Logradouro</label>
              <Field name="logradouro" type="text" />
              <ErrorMessage name="Logradouro"/>
            </div>
            <div className="form-control-group">
              <label>Número</label>
              <Field name="numero" type="text" />
              <ErrorMessage name="numero"/>
            </div>
            <div className="form-control-group">
              <label>Complemento</label>
              <Field name="complemento" type="text" />
              <ErrorMessage name="complemento"/>
            </div>
            <div className="form-control-group">
              <label>Bairro</label>
              <Field name="bairro" type="text" />
              <ErrorMessage name="bairro"/>
            </div>
            <div className="form-control-group">
              <label>Cidade</label>
              <Field name="cidade" type="text" />
              <ErrorMessage name="cidade"/>
            </div>
            <div className="form-control-group">
              <label>Estado</label>
              <Field component="select" name="uf">
                <option value ={null}>Selecione o Estado</option>
                <option value ="AC">Acre</option>
                <option value ="AL">Alagoas</option>
                <option value ="AP">Amapá</option>
                <option value ="AM">Amazonas</option>
                <option value ="BA">Bahia</option>
                <option value ="CE">Ceará</option>
                <option value ="ES">Espírito Santo</option>
                <option value ="GO">Goiás</option>
                <option value ="MA">Maranhão</option>
                <option value ="MT">Mato Grosso</option>
                <option value ="MS">Mato Grosso do Sul</option>
                <option value ="MG">Minas Gerais</option>
                <option value ="PA">Pará</option>
                <option value ="PB">Paráiba</option>
                <option value ="PE">Pernanbuco</option>
                <option value ="PI">Piauí</option>
                <option value ="PR">Paraná</option>
                <option value ="RJ">Rio de Janeiro</option>
                <option value ="RN">Rio Grande do Norte</option>
                <option value ="RO">Rondônia</option>
                <option value ="RR">Roraiama</option>
                <option value ="RS">Rio Grande do Sul</option>
                <option value ="SE">Sergipe</option>
                <option value ="SP">São Paulo</option>
                <option value ="SC">Santa Catarina</option>
                <option value ="TO">Tocantins</option>
                <option value ="DF">Destrito Federal</option>
              </Field>
              <ErrorMessage name="uf"/>
            </div>
            
             <div className="form-control-group">
              <label>E-mail</label>
              <Field name ="email" type="email" />
              <ErrorMessage name="email"/>
            </div>
            <div className="form-control-group">
              <label>rg</label>
              <Field name ="rg" type="text" />
              <ErrorMessage name="rg"/>
            </div>
            <div className="form-control-group">
              <label>Celular</label>
              <Field name ="celular" type="text" />
              <ErrorMessage name="celular"/>
            </div>
            <div className="form-control-group">
              <label>Identidade</label>
              <Field name ="identidade" type="text" />
              <ErrorMessage name="identidade"/>
            </div>
            <div className="form-control-group">
              <label>CPF</label>
              <Field name ="cpf" type="text" />
              <ErrorMessage name="cpf"/>
            </div>
            
            <div className="form-control-group">
              <label>Habilitação</label>
              <Field select="habilitacao" name ="habilitacao" type="string" />
              <option value="A">A</option>
              <option value="A">b</option>
              <option value="A">AB</option>
              <option value="A">C</option>
              <option value="A">D</option>
              <option value="A">E</option>
              <ErrorMessage name="habilitacao"/>
            </div>
            <button type="submit"disabled={!isValid}>Enviar!</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
