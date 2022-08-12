import {createGlobalStyle} from 'styled-components';
import Login from './Login';
import Sign from './Sign';
import Plan from './Plan';
import Home from './Home';
import Subscriptions from './Subscriptions/Subscriptions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: black;
    color: white;
}

`


export default function App(){
    return(
        <>
        <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='sign-up' element={<Sign />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='subscriptions/:ID_DO_PLANO' element={<Plan />} />
        <Route path='/home' element={<Home />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}