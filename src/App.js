import React from 'react'
import './App.css';
import Login from './Auth/Login';
import ToDo from './components/ToDos/ToDo';
import Categories from './components/Categories/Categories';
import NotFound from './components/Routing/NotFound';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthProvider from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<ProtectedRoute><ToDo /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/todos' element={<ProtectedRoute><ToDo /></ProtectedRoute>} />
          <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
