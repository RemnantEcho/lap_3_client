import React from 'react';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components'
import StudentHomePage from './pages/StudentHomePage';
import RequireAuth from './components/RequireAuth/RequireAuth';
import './App.css';
import { createContext } from 'react';
function App() {
 


  return (
    <Routes>
      {/*public routes */}
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.HomePage />}/>
        <Route path="/accessibility" element={<Pages.AccessibilityPage />}/>
        <Route path="/welcome" element={<StudentHomePage/>}/>
        {/*<Route path ="/unauthorized" element={<Pages.Unauthorized/>}/>*/}
        <Route path="/login" element={<Pages.LoginPage />}/>
        <Route path="/signup" element={<Pages.SignupPage />}/>


          {/* protected routes */}
          <Route element={<RequireAuth/>}> 
        <Route path="/account" element={<Pages.AccountPage />}/>
        <Route path="/calendar" element={<Pages.CalendarPage />}/>
        
        <Route path="/progress" element={<Pages.ProgressPage />}/>
       
        <Route path="/todo" element={<Pages.TodoPage />}/>
        {/* <Route path="/todo/:date" element={<Pages.TodoPage />}/> */}
        <Route path="*" element={<Pages.NotFoundPage />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
