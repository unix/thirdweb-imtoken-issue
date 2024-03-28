import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'

const code = `<code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThirdwebProvider</span></span>
  <span class="token attr-name">activeChain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sepolia<span class="token punctuation">"</span></span>
  <span class="token attr-name">clientId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YOUR_CLIENT_ID<span class="token punctuation">"</span></span>
  <span class="token attr-name">supportedWallets</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token function">metamaskWallet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">imTokenWallet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConnectWallet</span></span> <span class="token attr-name">modalSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThirdwebProvider</span></span><span class="token punctuation">&gt;</span></span></code>
`

export const App: React.FC<unknown> = () => {
  return (
    <main>
      <section>
        <h1>Thirdweb & imToken issue</h1>
      </section>
      <section>
        <pre dangerouslySetInnerHTML={{ __html: code }} />
      </section>
      <ConnectWallet modalSize="wide" />
    </main>
  )
}
