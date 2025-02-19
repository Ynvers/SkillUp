import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../../../src/pages/Admin/Login';
import StudentLogin from '../../../src/pages/Student/Login';
import StudentExplore from '../../../src/pages/Student/Explore';
import AdminDashboard from '../../../src/pages/Admin/Dashboard';
import StudentDashboard from '../../../src/pages/Student/Dashboard';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/explore" element={<StudentExplore />} />
        </Routes>
    );
};

export default App;
