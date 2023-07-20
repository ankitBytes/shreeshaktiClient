import React from "react";

// import pages
import RootLayout from "./pages/root-layout";
import HomePage from "./pages/home-page";
import MediaCard from "./pages/servicePage";
import TrackingPage from "./pages/tracking";
import Shipment from "./pages/shipment";
import AdminLogin from "./pages/admin/login";
import AdminLayout from "./pages/admin/admin-layout";
import AdminDashboard from "./pages/admin/dashboard";
import ErrorPage from "./pages/error-page";

// router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/services" element={<MediaCard />} />
              <Route path="/tracking" element={<TrackingPage />} />
              <Route path="/shipment" element={<Shipment />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="login" element={<AdminLogin />} />
              <Route
                path="dashboard"
                element={
                  <RequireAuth>
                    <AdminDashboard />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}



import { UserAuth } from "./contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  let { currentUser } = UserAuth();
  let location = useLocation();
  return currentUser ? (
    children
  ) : (
    <Navigate to={"/admin/login"} state={{ from: location }} />
  );
}
