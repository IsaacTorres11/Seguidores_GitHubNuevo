import { Route, Routes } from "react-router-dom"
import Home from "./Componentes/Home"
import Repositorios from "./Componentes/Repositorios"
function App() {

  return (
    <>
  
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path="/:user/repositorios" element={<Repositorios/>}/>
    </Routes>

    </>

  )
}

export default App
