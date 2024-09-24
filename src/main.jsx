import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global
      styles={css`
        ${emotionNormalize}
        html, body {
          padding: 0;
          margin: 0;
          font-family: 'Pretendard', sans-serif;
          font-size: 62.5%;
        }
      `}
    />
    <App />
  </StrictMode>
);
