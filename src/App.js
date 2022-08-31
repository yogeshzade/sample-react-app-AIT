import './App.css';
import FunComp from './Component/FunComp';
import ClassComp from './Component/ClassComp';
import Button from './Component/Button';
import Counter from './Component/Counter';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Component/Form';
import ListsandKeys from './Component/ListsandKeys';
import Footer from './Component/Footer';
import TodoClass from './Component/TodoClass';
import TodoFunction from './Component/TodoFunction';
import CounterFuncComp from './Component/CounterFuncComp';
import UseRef from './Component/UseRef';
import React, { useContext } from 'react';
import ComponentC from './Component/UseContext/ComponentC';
import ComponentB from './Component/UseContext/ComponentB';
import UseReducer from './Component/UseReducer';

export const UserContext=React.createContext();



function App() {
  return (
    <div>
    <Header />
    <TodoClass />
    <TodoFunction />
    <CounterFuncComp />
    <UseRef />

    <UserContext.Provider value={"Yogesh"}>
      <ComponentB />
    </UserContext.Provider>
    <UseReducer />
    <Footer />
    {/* <Form />
    <ListsandKeys /> */}
      {/* <h1>Yogesh!</h1> */}
       {/* <FunComp name="Reactjs" duration="3 Months"/>
       <ClassComp location="Nagpur" timing="7am to 8am"/>
       <Button value="Add To Cart"/>
       <Button value="Purchase" />
       <Button value="Submit" />
        <Counter /> */}
    </div>
  );
}

export default App;
