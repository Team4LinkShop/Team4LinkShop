import UserInformation from '../components/UserInformation';
import ItemInformation from '../components/ItemInformation';
import CompleteButton from '../components/CompleteButton';
import MyShoppingMall from '../components/MyShoppingMall'
import { useState } from 'react';
import { css } from '@emotion/react';

const containerStyle = css`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    margin-left: 15.5px;
    margin-right: 15.5px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

function ProducePage() {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <div css={containerStyle}>
      <UserInformation setIsValid={setIsFormValid} />
      <ItemInformation />
      <MyShoppingMall />
      <CompleteButton isActive={isFormValid} />
    </div>
  );
}

export default ProducePage;
