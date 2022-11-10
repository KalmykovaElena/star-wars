import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/App";
import ServicesApi from "./services-api";


const root = ReactDOM.createRoot(document.getElementById('root'));
const services = new ServicesApi()
services.getAllPlanets()

const people = new ServicesApi()
people.getAllPeople()

root.render(

<App/>

);


