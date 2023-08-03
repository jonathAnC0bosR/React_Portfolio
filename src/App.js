import Navbar from "./Components/Navbar/Navbar"
import { useState } from "react"

export default function App() {

    const [currentPage, setCurretPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />
        }
    }

    return (
        <div>
            <Navbar />
        </div>
    )
}