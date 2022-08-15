import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import styled from "styled-components";
import { listPlans } from "../Services/Requests";


export default function Subscriptions(){
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.membership);
    const [drivplans, setDrivplans] = useState([]);
    const navigate = useNavigate();
    
    
useEffect(() => {
    listPlans().then((res) =>{console.log(res.data)
    setDrivplans(res.data);
} )
    .catch(()=> console.log('deu errado irmão'))
}, [])
    

    

    return(
    <>
    <ChoosePLan>
        <TopPlan>
            <h3>Escolha seu Plano</h3>
        </TopPlan>

        {drivplans.map((plan) => 
        <EachPlan onClick={() => navigate(`${plan.id}`, {state:plan})} >
            <LeftSide>
                <img src={plan.image} alt='logoDriven'/>
            </LeftSide>
            <RightSide>
                <h3>R${plan.price}</h3>
            </RightSide>
        </EachPlan>
        
)}
        
        </ChoosePLan>
        </>
    )
}

const ChoosePLan = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin: 30px auto;
`

const TopPlan = styled.div`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;

`

const EachPlan = styled.div`
margin: 5px auto;
display:flex;
justify-content: space-around;
align-items: center;
width: 290px;
height: 160px;
background: black;
border: 3px solid #7E7E7E;
border-radius: 12px;
box-sizing: border-box;
`

const LeftSide = styled.div`
display:flex;
justify-content: flex-start;
margin: 0 auto;
img{
    height: 91px;
    width:95px;
}
`

const RightSide = styled.div`
margin: 0 auto;
display:flex;
justify-content: flex-start; 
font-family: Roboto;
font-size: 24px;
font-weight: 700;
text-align: left;

`