import Logo from './Assets/Img/LogoDriven.png';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postLogin } from './Services/Requests';


export default function Login(){  
    const [formLogin, setFormLogin] = useState();

function handleForm({name, value}){
console.log(name,value)
setFormLogin({...formLogin,
    [name]:value}
)
}

function sendForm(e){
    e.preventDefault();
    postLogin(formLogin)
    .then((res) => {console.log(res.data)
        localStorage.setItem('user', JSON.stringify(res.data))
        localStorage.setItem('token', JSON.stringify(res.data.token))
       
    })
    .catch(() => console.log('deu errado!!'))
}

    return(
        <Content>
        <MainLogo src={Logo} alt="logo" />
        <Form>
            <input type="email" name="email" placeholder="E-mail" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
            <input type="password" name="password" placeholder="Senha" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />

            <Button onClick={sendForm}>Entrar</Button>
            <Link to={'/sign-up'}><h3>Não possui uma conta? Cadastre-se</h3></Link>
        </Form>
        </Content>
    )
}

const MainLogo = styled.img`
    height: 50px;
    width: 250px;
    margin-top: 40px;
`

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