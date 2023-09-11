import React from 'react';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components'

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.HomePage />}/>
        <Route path="/accessibility" element={<Pages.AccessibilityPage />}/>
        <Route path="/account" element={<Pages.AccountPage />}/>
        <Route path="/calendar" element={<Pages.CalendarPage />}/>
        <Route path="/login" element={<Pages.LoginPage />}/>
        <Route path="/progress" element={<Pages.ProgressPage />}/>
        <Route path="/signup" element={<Pages.SignupPage />}/>
        <Route path="/todo" element={<Pages.TodoPage />}/>
        <Route path="/todo/:id" element={<Pages.TodoPage />}/>
        <Route path="*" element={<Pages.NotFoundPage />}/>
      </Route>
    </Routes>
  )
}

export default App
