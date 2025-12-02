import MainLayout from "./components/layout/MainLayout";
import TodayPage from "./pages/TodayPage";

// We need to import the styles
import "./styles/main.scss";

/**
 * Root application component.
 * For Day 1 we render only the TodayPage.
 */
function App() {

  return (
    <MainLayout>
      <TodayPage />
    </MainLayout>
  );
}

export default App;
