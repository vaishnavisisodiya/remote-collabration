import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/DashboardPage";
import { AccountSetupProvider } from "../features/account_setup/AccountSetupContext";
import AccountSetup from "../features/account_setup/AccountSetup";
import MyTasksPage from "../features/dashboard/MyTasksPage";
import DashboardHome from "../features/dashboard/DashboardHome";
import Inbox from "../features/dashboard/Inbox";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="my-tasks" element={<MyTasksPage />} />
          <Route path="inbox" element={<Inbox />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route
          path="account_setup"
          element={
            <AccountSetupProvider>
              <AccountSetup />
            </AccountSetupProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
