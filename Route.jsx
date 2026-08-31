import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects/:slug"
                    element={<ProjectDetails />}
                />
            </Routes>
        </BrowserRouter>
    )
}
