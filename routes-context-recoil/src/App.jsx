import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

/* 
  React.lazy is used for code-splitting and lazy loading components.
  It helps in loading the components only when they are needed or when the user navigates to them, thus improving performance.
*/
const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Users = React.lazy(() => import("./components/Users"));

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/users">Users</NavLink>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Users />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
