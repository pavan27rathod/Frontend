import React from 'react'
import ReactDOM from 'react-dom/client';
import UseStateHook from "./components/UseStateHook"
import UseEffectHook from './components/UseEffectHook.jsx'
import "./App.css"
import UseRefHook from './components/UseRefHook.jsx'
import UseContextHook from './components/UseContextHook.jsx';
import UseMemoUseCallback from './components/UseMemoUseCallback.jsx';
import CustomHooks from './CustomHooksQues/CustomHooks.jsx';

function App() {

  return (
    <>
      <h2>Hooks Interview Questions  </h2>
      {/* <UseStateHook />  */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoUseCallback /> */}
      <CustomHooks />

    </>
  )
}

export default App
