import axios from 'axios';

const BASE_URL = 'https://mock-api.driven.com.br/api/v4/driven-plus';

function authenticate (){
    const auth = JSON.parse(localStorage.getItem('token'))
    const config = {
        headers:   {
        Authorization: `Bearer ${auth}`
    }
  };

    return config;
}



function postSing(sign){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, sign);
    return promise;
}

function postLogin(login){
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;
}

function listPlans(){
    const config = authenticate();
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, config)
    return promise
}

function postPlan(myplan){
    const config = authenticate();
    const promise = axios.post(`${BASE_URL}/subscriptions`, myplan, config)
    return promise;
}


export { postSing, postLogin, listPlans, postPlan}