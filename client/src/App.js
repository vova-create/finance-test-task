import './App.css';
import Card from "./components/Card";
import { io } from "socket.io-client";
import {useEffect, useState} from "react";


function App() {
    const [value, setValue] = useState([])

    useEffect(() => {
        const socket = io('http://localhost:4000');
        socket.emit("start")
        socket.on("ticker", (data) => {
            setValue(data)
        })
}, [])

    return (
    <div className="App">
        {value.map((element) => {
            return  <Card ticker={element.ticker} price={element.price} change={element.change} exchange={element.exchange} changePercentage={element.change_percent}/>
        })}
    </div>
  );
}

export default App;


