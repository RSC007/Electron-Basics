import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)

  var time;
  useEffect(() => {
    time = setInterval(() => {
      setSecond(second + 1)
      if (second === 59) {
        setMinute(minute + 1)
        setSecond(0)
      }
    }, 1000)

    return ()=> clearInterval(time)
  })

  return (
    <div className="timer-container">
      <div className="time">
        <h3>{minute} : {second}</h3>
      </div>

      <div className="timer-actions">
        <button onClick={() => {
          setSecond(0)
          setMinute(0)
        }}>
          Reset
        </button>
        <button onClick={()=>clearInterval(time)}>Stop</button>

        <button onClick={()=>{
          window.electron.notificationApi.sendNotification('My custom notification!');
        }}>Test Notification</button>
      </div>
    </div>
  )
}

export default Timer