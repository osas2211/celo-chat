import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ChatScreen } from "./screen/chatScreen"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ChatScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
