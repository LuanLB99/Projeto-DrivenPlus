import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postSing } from './Services/Requests';



export default function Sign(){  
    const [formSign, setFormSign] = useState();

function handleForm({name, value}){
console.log(name,value)
setFormSign({...formSign,
    [name]:value}
)
}

function sendForm(e){
    e.preventDefault();
    console.log(formSign);
    postSing(formSign)
    .then((res) => {
        console.log(res)
    })
    .catch((res) => alert(res.data));
}

    return(
        <Content>
        
        <Form>
        <input type="text" name="name" placeholder="Nome" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
        <input type="text" name="cpf" placeholder="CPF" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
        <input type="email" name="email" placeholder="E-mail" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
        <input type="password" name="password" placeholder="Senha" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />

            <Button onClick={sendForm}>Cadastrar</Button>
            <Link to={'/'}><h3>Já possuí uma conta? Entre</h3></Link>
        </Form>
        </Content>
    )
}


const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 80px auto;
    width:100%;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;

    input {
        height: 40px;
        width: 250px;
        background: white;
        border-radius: 5px;
        margin-top: 12px;
        border: 1px solid black;
        padding-left: 10px;
        color: black;
    }

    h3 {
        font-size:14px;
        font-family: 'Roboto';
        font-weight: 400;
        margin-top: 20px;
    }
`

const Button = styled.button`
    background: #FF4791;
    width: 250px;
    height: 40px;
    margin-top: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`