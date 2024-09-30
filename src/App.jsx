import React from 'react';
import { Name, Id, Password } from './components/common/userinfor.jsx';
import ItemInformation from './components/common/iteminfor.jsx';
import MyShoppingMall from './components/common/myshoppingmall.jsx';
import { css } from '@emotion/react';

function App() {
  return (
    <>
      <div>
        <Name />
        <Id />
        <Password />
        <ItemInformation />
        <MyShoppingMall />
      </div>
    </>
  );
}

export default App;
