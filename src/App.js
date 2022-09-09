import Home from "./Pages/Home/Index"
import Login from "./Pages/Login/Index"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/home" element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
