import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";

/* 
  React.lazy is used for code-splitting and lazy loading components.
  It helps in loading the components only when they are needed or when the user navigates to them, thus improving performance.
*/
const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Users = React.lazy(() => import("./components/Users"));

function App() {
  const Appbar = () => {
    const navigate = useNavigate();
  };
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/users")}>Users</button>
    </div>
  );
}
return (
  <>
    <BrowserRouter>
      <Appbar />
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

export default App;
