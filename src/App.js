import './App.css';
import FunComp from './Component/FunComp';
import ClassComp from './Component/ClassComp';
import Button from './Component/Button';
function App() {
  return (
    <div className="App">
      <h1>Yogesh!</h1>
       <FunComp name="Reactjs" duration="3 Months"/>
       <ClassComp location="Nagpur" timing="7am to 8am"/>
       <Button value="Add To Cart"/>
       <Button value="Purchase" />
       <Button value="Submit" />

    </div>
  );
}

export default App;
