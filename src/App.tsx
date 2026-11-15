import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import KeyTakeawaysPreview from "./pages/KeyTakeawaysPreview/KeyTakeawaysPreview"

function App() {

  return (
    <Routes>
      <Route path="/" element={<KeyTakeawaysPreview />} />
      <Route path="/archive" element={<Home />} />
    </Routes>
  )
}

export default App