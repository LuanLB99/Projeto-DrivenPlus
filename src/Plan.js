import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./Context/UserContext";
import { postPlan } from "./Services/Requests";
import Prancheta from './Assets/Img/Prancheta.png';
import Nota from './Assets/Img/Nota.png';
import Fechar from './Assets/Img/Fechar.png'

export default function Plan(){
    const myId = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(false);
    const {setUser, plans} = useContext(UserContext); 
    const [formLogin, setFormLogin] = useState({
        membershipId:myId.ID_DO_PLANO,
    });
    const benefits = useLocation();
   
function handleForm({name, value}){
console.log(name,value)
setFormLogin({...formLogin,
    [name]:value}
)
}

function sendForm(e){
    e.preventDefault();
    postPlan(formLogin)
    .then((res) =>{
    setUser(res.data);
    localStorage.setItem('member', JSON.stringify(res.data))
    navigate('/home');
})
    .catch(() => console.log('deu errado poxa'))
    
}
    return(
        <>
        <ConfirmBorder display={page}>
        <img src={Fechar} alt='Setinha de fechar' onClick={() => setPage(false)} />
        <Quadro display={page}>
            <Confirm>
                <h3>Tem certeza que deseja assinar o plano Driven Plus R${benefits.state.price}?</h3>
                <ConfirmButtons>
                <No onClick={() => setPage(false)}>Não</No><Yes onClick={sendForm}>Sim</Yes>
                </ConfirmButtons>
            </Confirm>
            </Quadro>
            </ConfirmBorder>
        
        
        <FormFather>
        <Logo>
            <img src={benefits.state.image} />
        </Logo>
        <Benefits>
            <h4>
             <img src={Prancheta} />
                 Benefícios:
            </h4>
            <div>
                <h4>1. Brindes exclusivos</h4>
                <h4>2. Materiais bônus de web</h4>
            </div>
            <h4>
                <img src={Nota} />
                 Preço:</h4>
            <div>
                <h4>R${benefits.state.price} cobrados mensalmente.</h4>
            </div>

        </Benefits>
         <Form>
            <CardName type="text" name="cardName" placeholder="Nome impresso no cartão" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })} />
            <CardName type="text" name="cardNumber" placeholder="Dígitos do cartão" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />
            <MyCards>
             <Security type="text" name="securityNumber" placeholder="Código de segurança" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />
             <Security type="text" name="expirationDate" placeholder="Validade" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value
            })}  />
            </MyCards>
            <Button onClick={() => setPage(true)}>Assinar</Button>
        </Form>
        </FormFather>
        </>
    )
}

const FormFather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 667px;
    width: 100%;
`

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 40%;

    h3 {
        font-size:14px;
        font-family: 'Roboto';
        font-weight: 400;
        margin-top: 20px;
    }
`
const Benefits = styled.div`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

        div {
            margin: 5px 0;
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
    justify-content: center;
    align-items: center;
    color: black;
    display: ${props => props.display ?'flex':'none'};
    z-index: 10;
`

const ConfirmBorder = styled.div`
    width: 100%;
    height: 660px;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: black;
    display: ${props => props.display ?'flex':'none'};
    z-index: 9;

    img{
        position:absolute;
        top: 25px;
        right: 25px;
    }
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
const CardName = styled.input`
    height: 40px;
    width: 250px;
    background: white;
    border-radius: 5px;
    margin-top: 12px;
    border: 1px solid black;
    padding-left: 10px;
    color: black;

`

const Security = styled.input`
    height: 40px;
    width: 120px;
    background: white;
    border-radius: 5px;
    margin-top: 12px;
    border: 1px solid black;
    padding-left: 10px;
    color: black;

`

const MyCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    margin: 10px 0;
`