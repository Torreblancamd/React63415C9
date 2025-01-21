import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import "./App.css";


function App(){

    return (
        <BrowserRouter>           
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="galeria" element={<Galeria/>}/>
                    <Route path="productos" element={<Productos/>}/>                    
                </Route>
                <Route path="*" element={<Error/>}/>  
            </Routes> 
        </BrowserRouter>
     )
}


export default App;