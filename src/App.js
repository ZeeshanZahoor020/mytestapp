import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import LoginSuccess from "./LoginSuccess"



function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/success" element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App