import { Routes,Route } from "react-router-dom";
import Shop from "./shop.js";
import Home from "./home.js";
import Cart from './cart.js'
import { useState } from "react";
import Contact from "./contact_us.js";

export default function Fin(){
        const [cap, setcap]=useState([])
        const [quant,setquan]= useState({})
    return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop cap={cap} setcap={setcap} quant={quant} setquan={setquan} />} />
                <Route path="/cart" element={<Cart cap={cap} setcap={setcap}setquan={setquan}/>}   />
                <Route path="/contact" element={<Contact/>}   />
            </Routes>
    )
}