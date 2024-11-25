import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/tasks" element={<h1>Task page</h1>}></Route>
          <Route path="/add-task" element={<h1>New task</h1>}></Route>
          <Route path="/task/:id" element={<h1>Update task</h1>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App