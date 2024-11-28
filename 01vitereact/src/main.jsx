import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 import React from 'react'
function MyApp(){
  return (
    <>
    <h1>custom app || chai</h1>
    </>
  )
}
// const ReactElement ={
//   type:'a',
//   props: {
//       href:'https://google.com',
//       target:"_blank"
//   },
//   children:'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser ='chai aur user'

//tag, object,text
const reactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
target:"_blank"
  },
  'click me to visit google',
  anotherUser
) 

createRoot(document.getElementById('root')).
render(
  // <MyApp/>
  // reactElement
  // anotherElement

  // MyApp()
  <App/>
)
