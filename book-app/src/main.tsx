import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import { QueryClient,QueryClientProvider } from 'react-query'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx'


import App from './components/App/App.tsx'
import './assets/styles/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
        <BrowserRouter>
            <QueryClientProvider client={new QueryClient()}>
                <App />
            </QueryClientProvider >
        </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
