import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from 'react';
import UserContext from './Context/UserContext';
import Seta from './Assets/Img/Seta.png';

export default function Change(){
    const {user} = useContext(UserContext);
    console.log(user);

    return(
        <>
       <Link to={'/home'}><img src={Seta} /></Link>

        <Content>
        <Form>
            <input type="text" name="name" placeholder={user.name} disabled={user.name}/>
            <input type="text" name="cpf" placeholder={user.cpf} disabled=''/>
            <input type="email" name="email" placeholder={user.email} disabled=''/>
           

            <Link to={`/users/${user.membership.id}/update`}><Button>Atualizar</Button></Link>
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

    a {
        text-decoration: none;
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