import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import { FilterContextProvider } from "./context/FilterContext"



function App() {

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<FilterContextProvider><Home /></FilterContextProvider>}/>
        <Route path = "*" element = {<Error />} />
      </Routes>
    </Router>
  )
}

export default App
