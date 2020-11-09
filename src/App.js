import React from 'react';
import ClassComponent from './components/ClassComponent.js';
import FunctionComponent from './components/FunctionComponent.js';
import PropsComponent from './components/PropsComponent.js';
import Container from './components/Container.js';
import Counter from './components/Counter.js';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';

//App : componente radice dal quale vengono mostrati tutti i contenuti
// vengono mostrati contenuti in base all'url in cui ci troviamo.

//il componente che decide cosa mostrare in base all'url è react-router-dom
//viene installato con npm install react-router-dom oppure yarn add react-router-dom

//il cosa mostrare viene deciso in base alla route. Le route sono definite in un array, 
//il cui elemento content definisce il contenuto

const testData = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};

const routes = [
  {
    title: 'Homepage',
    path: '/',
    exact: true,
    content: <FunctionComponent /> //qui metteremo il componente Home
  },
  {
    title: 'Login',
    path: '/login',
    exact: true,
    content: <ClassComponent /> //qui metteremo il componente Login
  },
  {
    title: 'Counter',
    path: '/counter',
    exact: true,
    content: <Counter /> //qui metteremo il componente Login
  }
];

//per usare le route serve BrowserRouter (deve contenere tutta la nostra app)
// è il componente che contiene tutte le funzionalità principali della libreria e ci permette di usare il routing nel browser
// il router deve contenere 2 elementi:
//- una lista di link alla pagine che vogliamo vedere
//- un elemento switch che mostra il contenuto del link attuale
//il contenuto viene renderizzato da un secondo componente, Route
//Sia il NavLink che Route contengono un attributo che indica la route, "to" per NavLink e "path" per Route
//viene mostrato nel contenuto ciò che inchiamo all'interno della prop children di Route in pagina
//viene scelta la route con il path corrispondente al link cliccato
//lo switch rappresenta i contenuti che possono cambiare in  base al link cliccato

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          {
            routes.map((route, index) => {
              return <NavLink key={index} exact={route.exact} to={route.path}>{route.title}</NavLink>
            })
          }
        </header>
        <Switch>
          {/* 
            Container -> è un componente che usa la prop children, e la mostra come suo contenuto
           */}
          <Container>
          {
            routes.map((route, index) => {
              return <Route key={index} exact={route.exact} path={route.path} children={route.content} /> 
            })
          }
          </Container>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
