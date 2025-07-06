import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import DashboardPage from "./app/dashboard/page"
import PanoramaPage from "./app/panorama/page"
import AutomatizacionPage from "./app/automatizacion/page"
import DebatePage from "./app/debate/page"
import EticaPage from "./app/etica/page"
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<PanoramaPage />} />
          <Route path="/panorama" element={<PanoramaPage />} />
          <Route path="/automatizacion" element={<AutomatizacionPage />} />
          <Route path="/debate" element={<DebatePage />} />
          <Route path="/etica" element={<EticaPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
