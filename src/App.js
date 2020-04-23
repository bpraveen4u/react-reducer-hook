import React, { useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispach] = useReducer(reducer, initialState)
  return (
    <div>
      <DataFetchingTwo />
      {/* <DataFetchingOne /> */}
      {/* <CountContext.Provider
      value={{ countState: count, countDispatch: dispach }}
    >
      <div className='App'>
        <h2>count - {count}</h2>
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* </div>
    </CountContext.Provider> */}
    </div>
  )
}

export default App
