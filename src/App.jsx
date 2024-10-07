import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProfileDetailPage from './pages/ProfileDetailPage';


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/list" element={<ShopList 수진님 샵리스트 페이지 />} /> */}
        {/* <Route path='/post' element={영찬님의 생성페이지} /> */}
        <Route path="/link/:linkId" element={<ProfileDetailPage />} />
      </Routes>
      {/* NOTE: 아래 ToastContainer 컴포넌트는 토스트 메세지인데, root에 둬야한대서 둡니다......토스트 메세지 활용하실분 활용하세용! 추후 여유되면 디자인 커스텀 해볼게요!  */}
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
