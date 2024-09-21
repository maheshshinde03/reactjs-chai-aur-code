import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//learning purpose
// function MyApp(){
//     return (
//         <>
//         <h2>Hi from react vite</h2>
//         </>
//     )
// }


createRoot(document.getElementById('root')).render(

     <App />
    //<MyApp />  // this one also work
    // MyApp() // this one also work
)
