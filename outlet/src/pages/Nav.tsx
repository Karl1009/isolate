import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    let navigate = useNavigate();
    const goToMain = () => {
        navigate("../", { replace: true });
    }
    const goToTask = () => {
        navigate("../tasks", { replace: true });
    }
    const goToMessage = () => {
        navigate("../messages", { replace: true });
    }
  return (
    <div>
        <button onClick={goToMain}>Main</button>
        <button onClick={goToTask}>GoToTask</button>
        <button onClick={goToMessage}>GoToMessage</button>
    </div>
  )
}

export default Nav