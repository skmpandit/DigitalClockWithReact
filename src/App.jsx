
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [ampm, setAmpm] = useState("");
 

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();

      let hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;

      const hourString = String(hours).padStart(2, "0");
      const minutesString = String(minutes).padStart(2, "0");
      const secondsString = String(seconds).padStart(2, "0");

      setHours(hourString);
      setMinutes(minutesString);
      setSeconds(secondsString);
      setAmpm(ampm);

    }
    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  })

  return (
    <div className='clock'>
      <span className="hours">{hours}</span>
      <span>:</span>
      <span className="minutes">{minutes}</span>
      <span>:</span>
      <span className="seconds">{seconds}</span>
      <span> </span>
      <span className="ampm">{ampm}</span>
    </div>
  )
}

export default App
