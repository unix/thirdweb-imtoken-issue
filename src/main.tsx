import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import 'poc.css'
import './index.css'
import { ThirdwebProvider, metamaskWallet, imTokenWallet } from '@thirdweb-dev/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="sepolia"
      clientId="YOUR_CLIENT_ID"
      supportedWallets={[metamaskWallet(), imTokenWallet()]}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
