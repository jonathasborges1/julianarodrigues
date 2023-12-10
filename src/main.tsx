/* eslint-disable react-refresh/only-export-components */
import './index.css'

import { StrictMode, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App.tsx'

const App = lazy(() =>
  import(/* webpackChunkName: "App" */ './App').then(module => ({
    default: module.App,
  }))
);

const loader = (
  <div className="container">
    <div className="loading">
      <span className="pulse spinner">
        App is loading. Almost done.
        <br />
        Please wait.
      </span>
    </div>
  </div>
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={loader}>
      <App />
    </Suspense>
  </StrictMode>,
)
