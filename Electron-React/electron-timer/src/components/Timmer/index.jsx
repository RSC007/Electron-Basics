import React, { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  var time;
  useEffect(() => {
    time = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
        window.electron.notificationApi.sendNotification(
          `${minute} Number of intervals done in minute!`
        );
      }
      // if (second === 10) {
      //   window.electron.notificationApi.sendNotification(
      //     `${second} Number of intervals done in 10 second!`
      //   );
      // }
    }, 1000);

    return () => clearInterval(time);
  });

  return (
    <div className="timer-container">
      <div className="time">
        <h3>
          {minute} : {second}
        </h3>
      </div>

      <div className="timer-actions">
        <button
          onClick={() => {
            setSecond(0);
            setMinute(0);
          }}
        >
          Reset
        </button>
        <button onClick={() => clearInterval(time)}>Stop</button>

        <button
          onClick={() => {
            window.electron.notificationApi.sendNotification(
              "My custom notification!"
            );
          }}
        >
          Test Notification
        </button>

        <button
          onClick={() =>
            window.electron.newWindowCreateApi.createNewWindow("New Window")
          }
        >
          Add Sreen
        </button>

        <button
          onClick={() => window.electron.closeAllWindowApi.closeAllWindow()}
        >
          Remove All Windows
        </button>

        <div className="advance-btns">
          <button
            onClick={() => window.electron.takeScreenShotApi.takeScreenShot()}
          >
            Take screenshot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
