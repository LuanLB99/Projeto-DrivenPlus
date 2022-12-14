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

function listPlan(idPlan){
    const config = authenticate();
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${idPlan}`, config)
    return promise
}

function postPlan(myplan){
    const config = authenticate();
    const promise = axios.post(`${BASE_URL}/subscriptions`, myplan, config)
    return promise;
}

function deletePlan(){
    const config = authenticate();
    const promise = axios.delete(`${BASE_URL}/subscriptions`, config);
    return promise
}


function postUpdate(update){
    const config = authenticate();
    const promise = axios.put(`${BASE_URL}/users/`, update, config);
    return promise;
}

export { listPlan, postSing, postLogin, listPlans, postPlan, deletePlan, postUpdate}