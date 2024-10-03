import UserInfo from './components/common/userinfor.jsx';
import ItemInformation from './components/common/iteminfor.jsx';
import MyShoppingMall from './components/common/myshoppingmall.jsx';
import { css } from '@emotion/react';
import CompleteButton from './components/common/button.jsx';

function App() {
  return (
    <>
      <div>
        <UserInfo />
        <ItemInformation />
        <MyShoppingMall />
        <CompleteButton />
      </div>
    </>
  );
}

export default App;
