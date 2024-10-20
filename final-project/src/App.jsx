import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./component/homepage"
import LoginPage from "./component/user/login"
import LoginAdmin from './component/admin/login_admin';
import RegisterPage from "./component/user/register"
import Dashboard from "./component/admin/dashboard"
import CreateData from './component/admin/createData';
import JobPage from './component/user/jobpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/login_admin' element={<LoginAdmin />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create' element={<CreateData />} />
          <Route path='/jobpage' element={<JobPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
