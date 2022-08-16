import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import UserContext from './Context/UserContext';
import styled from "styled-components";
import { postUpdate } from "./Services/Requests";

export default function ChangeUpdate(){

    const {user, setUser} = useContext(UserContext);
    console.log(user);
    const [formUpdate, setFormUpdate] = useState({
        cpf: user.cpf
    });
    const navigate = useNavigate();


 function handleForm({name, value}){
    console.log(name, value)
  setFormUpdate({...formUpdate,
    [name]:value}
)
}
console.log(formUpdate)
function sendForm(e){
    e.preventDefault();
    postUpdate(formUpdate)
    .then((res) => {
        console.log(res);
        setUser(res.data);
        navigate(`/users/${user.id}`)
    })
    .catch((res) => alert('Tente novamente com outros dados'));
}

    return(
        <>
    <Link to={`/users/${user.id}`}><img src='' /></Link>

         <Content>
        
        <Form>
        <input type="text" name="name" placeholder="Nome" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
        <input type="text" name="cpf" placeholder={user.cpf} onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
        <input type="email" name="email" placeholder="E-mail" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
        <input type="password" name="currentPassword" placeholder="Senha" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />

        <input type="password" name="newPassword" placeholder="Senha" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />

            <Button onClick={sendForm}>Cadastrar</Button>
        </Form>
        </Content>
        </>
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