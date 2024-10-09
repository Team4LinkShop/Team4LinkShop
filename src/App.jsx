import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProducePage from './pages/ProducePage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import ShopList from './pages/ShopList';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Navigate replace to="/list" />} />
        <Route path="/list" element={<ShopList />} />
        <Route path="/linkpost" element={<ProducePage />} />
        <Route path="/link/:linkId" element={<ProfileDetailPage />} />
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default App;
