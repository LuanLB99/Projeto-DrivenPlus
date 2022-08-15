import PefilIm from './Assets/Img/Vector.png';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './Context/UserContext';
import { deletePlan } from './Services/Requests';




export default function Home(){
    const {user} = useContext(UserContext);
    const navigate = useNavigate()
    const myplan = JSON.parse(localStorage.getItem('user'))
    function cancelPlan(){
        deletePlan()
        .then(navigate('/'))
        .catch(alert('Tente Novamente!'))
    }
    
    return(
        <HomePage>
        <TopPage>
            <ImagePlan src={user.membership.image} alt='logo'/> <PerfilImage src={PefilIm} alt='logo'/>
        </TopPage>
            <MainContentPage>
            <UserName>Olá, {user.name}</UserName>
            {user.membership.perks.map((perk) => 
            <Button><a href={perk.link} target="_blank" >{perk.title}</a></Button>
            )}
            </MainContentPage>
            
            <BottomContentPage>
            <Button onClick={() => navigate('/subscriptions')} >Mudar plano</Button>
            <ButtonCancel onClick={cancelPlan}>Cancelar plano</ButtonCancel>
            </BottomContentPage>
        </HomePage>
    )
}


const HomePage = styled.div`
    margin: 0 auto;
    width: 100%;

`
const TopPage = styled.div`
    margin: 20px auto;
    width: 90%;
    display:flex;
    justify-content: space-between;

`
const MainContentPage = styled.div`
    width: 90%;
    height: 425px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

`
const UserName = styled.div`
    margin-bottom: 30px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

`
const Button = styled.button`
    background: #FF4791;
    width: 80%;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    a{
        text-decoration: none;
        background: #FF4791;
    }
`

const ButtonCancel = styled.button`
    background: #FF4747;
    width: 80%;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

const BottomContentPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImagePlan = styled.img`
    width: 80px;
    height: 80px;
`
const PerfilImage = styled.img`
    width: 25px;
    height: 25px;
`