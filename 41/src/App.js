import { useState } from "react"
import Clicker from "./clicker"

export default function App({ children }) {
  const [hasClicker, setHasClicker] = useState(true)
  const [count, setCount] = useState(0)

  const toggleCLickerClick = () => {
    setHasClicker(!hasClicker)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>Total Count: {count}</div>
      <button onClick={toggleCLickerClick}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>
      {hasClicker && (
        <>
          <Clicker increment={increment} keyName="countA" color="crimson" />
          <Clicker increment={increment} keyName="countB" color="chocolate" />
          <Clicker increment={increment} keyName="countC" color="darkOrchid" />
        </>
      )}
    </>
  )
}
