import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postPlan } from "./Services/Requests";

export default function Plan(){
    const [page, setPage] = useState(false);
    const myId = useParams()
    const [formLogin, setFormLogin] = useState({
        membershipId:myId.ID_DO_PLANO,
    });
    const [formPlan, setFormPlan] = useState('')
   
function handleForm({name, value}){
console.log(name,value)
setFormLogin({...formLogin,
    [name]:value}
)
}

function form(){
    setPage(true) 
    setFormPlan(formLogin)
}

function sendForm(e){
    e.preventDefault();
    
}
    return(
        <>
        <Quadro>Aqui</Quadro>
         <Form>
            <input type="text" name="cardName" placeholder="Nome impresso no cartão" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
            <input type="text" name="cardNumber" placeholder="Dígitos do cartão" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />
             <input type="text" name="securityNumber" placeholder="Código de segurança" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />
             <input type="text" name="expirationDate" placeholder="Validade" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />

            <Button onClick={sendForm}>Assinar</Button>
        </Form>
        
        </>
    )
}


const Form = styled.div`
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

const Quadro = styled.div`
    width: 248px;
    height: 210px;
    background: white;
    position: absolute;
    left: 65px;
    top: 180px;
    color: black;
    display: none;
`