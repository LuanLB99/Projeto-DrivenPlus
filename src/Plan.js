import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { postPlan } from "./Services/Requests";
export default function Plan(){
    const [page, setPage] = useState(false);
    const myId = useParams();
    const navigate = useNavigate();
    const [formLogin, setFormLogin] = useState({
        membershipId:myId.ID_DO_PLANO,
    });
    const [formPlan, setFormPlan] = useState('');
    const [formFinalPlan, setFormFinalPlan] = useState('');
   
function handleForm({name, value}){
console.log(name,value)
setFormLogin({...formLogin,
    [name]:value}
)
}

function sendForm(e){
    e.preventDefault();
    console.log(formLogin)
    postPlan(formLogin)
    .then((res) =>{
    console.log(res.data)
    localStorage.setItem('member', JSON.stringify(res.data))
    navigate('/home');
})
    .catch(() => console.log('deu errado poxa'))
    
}
    return(
        <>
        <Quadro display={page}>
            <Confirm>
                <h3>Tem certeza que deseja assinar o plano Driven Plus R$ (Valor)?</h3>
                <ConfirmButtons>
                <No onClick={() => setPage(false)}>Não</No><Yes onClick={sendForm}>Sim</Yes>
                </ConfirmButtons>
            </Confirm>
            </Quadro>
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

            <Button onClick={() => setPage(true)}>Assinar</Button>
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
    border-radius: 10px;
    left: 65px;
    top: 250px;
    color: black;
    display: ${props => props.display ?'flex':'none'};
    z-index: 1;
`
const Confirm = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    h3 {
        font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    background: white;
    color: black;
    padding: 15px 25px;
    }
`

const ConfirmButtons = styled.div`
    width:90%;
    background: white;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`

const Yes = styled.button`
    height: 50px;
    width:100px;
    border-radius: 8px;
    border: 1px solid #FF4791;
    background: #FF4791;

`
const No = styled.button`
    height: 50px;
    width:100px;
    border-radius: 8px;
    border: 1px solid #CECECE;
    background: #CECECE;
    
`