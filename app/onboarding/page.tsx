import { OnboardingForm } from "@/components/onboarding-form"
import { Footer } from "@/components/footer"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome! Let's Set Up Your WhatsApp Bot
              </h1>
              <p className="text-lg text-gray-600">
                We need a few details to configure your AI-powered WhatsApp automation bot.
              </p>
            </div>
            <OnboardingForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
