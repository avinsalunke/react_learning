import logo from './logo.svg';
import './App.css';

import Button from './components/Buttons/Button';
import Button_2 from './components/Buttons/Button_2';
import Button_3 from './components/Buttons/Button_3';

let array1 = ['array_btn_1', 'array_btn_2','array_btn_3']
// Array of objects
let object1 = [
  {    
    name : 'obj_btn_1',
    color: 'black'    
  },
  {    
    name : 'obj_btn_2',
    color: 'Yellow'    
  },
  {    
    name : 'obj_btn_3',
    color: 'orange'    
  }
]

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        Hello <br></br>
        <Button></Button>
        {/* Passing name as propertry which is called as passing props to chind from parent app
            Here Button_2 is used, this is call reusability of react app */}
        <Button_2 name={'Button : 2'}></Button_2>
        <Button_2 name={'Button : 3'}></Button_2>
        <Button_2 name={'Button : 4'}></Button_2>

        {/* Passing multiple props to child */}
        <Button_3 name={'Click Me '} color={"red"}></Button_3>
        <Button_3 name={'Click Me '} color={"green"}></Button_3>

        {/* Array to create button */}
        {
          array1.map((d, index) => {
            return <Button_2 key={index} name={d} color="red" />;
          })
        }

        {
          object1.map((count, index) => {
            return <Button_3 name={count.name} color={count.color} />;
          })
        }
        {
          object1.map((count) => {
            return <Button_2 name={count.name} color={count.color} />;
          })
        }



    </div>
  );
}

export default App;
