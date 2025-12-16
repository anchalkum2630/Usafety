import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import LoginBlue from './pages/LoginBlue';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordBlue from './pages/ForgotPasswordBlue';
import EnterOTP from './pages/EnterOTP';
import VerifyPhone from './pages/VerifyPhone';
import VerifyOTP from './pages/VerifyOTP';
import AccountVerified from './pages/AccountVerified';
import CheckMailStatus from './pages/CheckMailStatus';
import AllEmployees from './pages/AllEmployees';
import EmployeeProfile from './pages/EmployeeProfile';
import AddEmployee from './pages/AddEmployee';
import AllDepartments from './pages/AllDepartments';
import DepartmentDetails from './pages/DepartmentDetails';
import TrainingModules from './pages/TrainingModules';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Splash from './pages/mobile/Splash';
import Onboarding from './pages/mobile/Onboarding';
import MobileTrainingList from './pages/mobile/MobileTrainingList';
import ARNavigation from './pages/mobile/ARNavigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login-blue" element={<LoginBlue />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password-blue" element={<ForgotPasswordBlue />} />
        <Route path="/verify-phone" element={<VerifyPhone />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/otp" element={<EnterOTP />} />
        <Route path="/account-verified" element={<AccountVerified />} />
        <Route path="/check-mail-status" element={<CheckMailStatus />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="all-employees" element={<AllEmployees />} />
          <Route path="employee/:id" element={<EmployeeProfile />} />
          <Route path="all-departments" element={<AllDepartments />} />
          <Route path="department-details" element={<DepartmentDetails />} />
        </Route>
        <Route path="/training-modules" element={<TrainingModules />} />
        <Route path="/add-employee" element={
          <DashboardLayout>
            <AddEmployee />
          </DashboardLayout>
        } />
        {/* Mobile App Routes */}
        <Route path="/mobile/splash" element={<Splash />} />
        <Route path="/mobile/onboarding" element={<Onboarding />} />
        <Route path="/mobile/training-list" element={<MobileTrainingList />} />
        <Route path="/mobile/ar-navigation" element={<ARNavigation />} />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
