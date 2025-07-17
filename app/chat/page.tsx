'use client'

import { useEffect } from 'react'

export default function ChatPage() {
  useEffect(() => {
    const injectBotpressScripts = () => {
      // Inject Botpress core script
      const script1 = document.createElement('script')
      script1.src = 'https://cdn.botpress.cloud/webchat/v3.1/inject.js'
      script1.defer = true
      document.body.appendChild(script1)

      // Inject your bot's config after the first one loads
      script1.onload = () => {
        const script2 = document.createElement('script')
        script2.src = 'https://files.bpcontent.cloud/2025/07/17/04/20250717040447-R43DWG78.js'
        script2.defer = true
        document.body.appendChild(script2)
      }
    }

    injectBotpressScripts()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center">
        Your WhatsApp Business Bot
      </h1>
    </div>
  )
}
