import { PricingCards } from "@/components/pricing-cards"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include 24/7 support and a 14-day free trial.
            </p>
          </div>
          <PricingCards />
        </div>
      </section>
      <Footer />
    </div>
  )
}
