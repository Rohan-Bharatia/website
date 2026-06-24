import { Routes, Route } from "react-router";

import Home from "./pages/home.tsx";
import Default from "./pages/default.tsx";
import './App.css'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Default />} />
        </Routes>
    )
}

export default App;
