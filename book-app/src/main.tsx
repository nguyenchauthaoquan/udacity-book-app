import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx'

import { QueryClient,QueryClientProvider } from 'react-query'

import './assets/styles/css/index.css'

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
        <QueryClientProvider client={new QueryClient()}>
            <App />
        </QueryClientProvider >
    </ErrorBoundary>
  </React.StrictMode>,
)
