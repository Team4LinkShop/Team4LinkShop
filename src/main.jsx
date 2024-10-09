import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global
      styles={css`
        ${emotionNormalize}
        html, body {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Pretendard', sans-serif;
          font-size: 62.5%;
        }
        p {
          margin: 0;
          padding: 0;
        }
        ul,
        li {
          list-style: none;
        }
      `}
    />

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
