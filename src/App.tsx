import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminDashboard from './pages/Admin/Dashboard'
import AdminLogin from './pages/Admin/Login'
import StudentDashboard from './pages/Student/Dashboard'
import StudentExplore from './pages/Student/Explore'
import StudentLogin from './pages/Student/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <h1>Bienvenue sur SkillUp</h1>
          } 
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/explore" element={<StudentExplore />} />
      </Routes>
    </Router>
  );
}

export default App
