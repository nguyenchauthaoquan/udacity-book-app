import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx'

import { QueryClient,QueryClientProvider } from 'react-query'

import './assets/styles/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
        <QueryClientProvider client={new QueryClient()}>
            <App />
        </QueryClientProvider >
    </ErrorBoundary>
  </React.StrictMode>,
)
