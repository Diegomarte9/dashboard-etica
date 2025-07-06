import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import Page from "./app/dashboard/page"
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/dashboard" element={<Page />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
