import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import TodayPage from "../pages/TodayPage";
import WeekPage from "../pages/WeekPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <nav className="card d-flex" style={{ marginBottom: "1rem" }}>
          <NavLink to="/" end>
            Today
          </NavLink>
          {" | "}
          <NavLink to="/week">Week</NavLink>
        </nav>

        {/* We Define the routes here */}
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/week" element={<WeekPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;
