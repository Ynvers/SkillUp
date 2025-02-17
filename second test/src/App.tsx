import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/Admin/Login';
import StudentLogin from './pages/Student/Login';
import StudentExplore from './pages/Student/Explore';
import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/Student/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/student/login" element={<StudentLogin />} />
                <Route path="/student/dashboard" element={<StudentDashboard />} />
                <Route path="/student/explore" element={<StudentExplore />} />
            </Routes>
        </Router>
    );
};

export default App;
