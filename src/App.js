import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Analyzer from './pages/Analyzer';
import AnalyzerParameter from './pages/AnalyzerParameter';
import CPT from './pages/CPT';
import LISCode from './pages/LISCode';
import TestParameter from './pages/TestParameter';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import NavDrawer from './components/Navbar/NavDrawer';
import GenLookups from './pages/GenLookups';
import InvoiceDetails from './pages/InvoiceDetails';
import InvoiceMasters from './pages/InvoiceMasters';
import Modules from './pages/Modules';
import RoleModules from './pages/RoleModules';
import Roles from './pages/Roles';
import OrderDetails from './pages/OrderDetails';
import OrderMasters from './pages/OrderMasters';
import PathologyPendingQueues from './pages/PathologyPendingQueues';
import PathologyResultMasters from './pages/PathologyResultMasters';
import Testcategories from './pages/Testcategories';
import TestSamples from './pages/TestSamples';
import TestUnits from './pages/TestUnits';
import Users from './pages/Users';
import PathologyResultDetails from './pages/PathologyResultDetails';
import AlertDialog from './components/AlertDialog';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import HISAnalyzer from './pages/HISAnalyzer';
import His from './pages/His';
import HeartBeat from './pages/HeartBeat';
import AnalyzerMachine from './pages/AnalyzerMachine';
import LoginPage from './components/Login/LoginPage';
import TestOrder from './pages/TestOrder';
import Hospital from './pages/Hospital';

function App() {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const alert = useSelector((state) => state.alertReducer);
  const { type, message, progress } = alert;

  useEffect(() => {
    if (type) setShowAlert(true);
    setTimeout(() => {
      dispatch({
        type: 'SET_INITIALSTATE'
      })
    }, 5000);
  }, [alert]);

  // const ProtectedRoute = ({ component: Component, ...rest }) => {
  //   const isAuthenticated = () => {
  //     let token = localStorage.getItem('token');
  //     return token ;
  //   };

  //   return (
  //     isAuthenticated() ? <Component /> : <Navigate to="/login" replace />
  //   );
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {type && <AlertDialog type={type} message={message} openAlert={[showAlert, setShowAlert]} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/analyzer' element={<Analyzer/>} />
          <Route path='/hospital' element={<Hospital/>} />
          <Route path='/analyzerParameter' element={<AnalyzerParameter />} />
          <Route path='/CPT' element={<CPT />} />
          <Route path='/LISCode' element={<LISCode />} />
          <Route path='/His' element={<His />} />
          <Route path='/HISAnalyzer' element={<HISAnalyzer />} />
          <Route path='/GenLookups' element={<GenLookups />} />
          <Route path='/InvoiceDetails' element={<InvoiceDetails />} />
          <Route path='/InvoiceMasters' element={<InvoiceMasters />} />
          <Route path='/Modules' element={<Modules />} />
          <Route path='/RoleModules' element={<RoleModules />} />
          <Route path='/Roles' element={<Roles />} />
          <Route path='/OrderDetails' element={<OrderDetails />} />
          <Route path='/OrderMasters' element={<OrderMasters />} />
          <Route path='/PathologyPendingQueues' element={<PathologyPendingQueues />} />
          <Route path='/PathologyResultDetails' element={<PathologyResultDetails />} />
          <Route path='/PathologyResultMasters' element={<PathologyResultMasters />} />
          <Route path='/Analyzer-Machine' element={<AnalyzerMachine />} />
          <Route path='/HeartBeatResults' element={<HeartBeat />} />
          <Route path='/TestCategories' element={<Testcategories />} />
          <Route path='/TestParameters' element={<TestParameter />} />
          <Route path='/TestSamples' element={<TestSamples />} />
          <Route path='/TestUnits' element={<TestUnits />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/TestOrder' element={<TestOrder />} />
          {/* <Route path='/*' element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
