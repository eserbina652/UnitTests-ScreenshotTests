// import React, {useEffect, useState} from "react";
// function App() {
//     const [state, setState] = useState(null)
//     const [toggle, setToggle] = useState(false)
//     const [value, setValue] = useState('')
//
//
//     const onClick = () => setToggle(prevState => !prevState)
//
//     useEffect(() => {
//         setTimeout(() => {
//             setState({})
//         }, 100)
//     }, [])
//
//   return (
//     <div>
//         <h1 data-testid='value-elem'>{value}</h1>
//         {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//         {state && <div style={{color: "red"}}>state</div>}
//       <h1>Hello world</h1>
//       <button data-testid='toggle-btn' onClick={onClick}>Click me</button>
//       <input onChange={e => setValue(e.target.value)} type='text' placeholder='input value...'/>
//     </div>
//   );
// }
//
// export default App;





import React from 'react';
import {Link} from "react-router-dom";
import AppRouter from "./ routers/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div>
            <Navbar/>
             <AppRouter/>
        </div>
    );
};

export default App;