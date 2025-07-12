"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 1,000 messages/month",
      "Basic auto-replies",
      "Lead capture forms",
      "Email support",
      "WhatsApp integration",
    ],
    razorpayLink: "https://rzp.io/l/starter-plan", // Placeholder
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "Best for growing businesses",
    features: [
      "Up to 5,000 messages/month",
      "Advanced auto-replies",
      "ChatGPT integration",
      "Lead management dashboard",
      "Priority support",
      "Custom workflows",
      "Analytics & reports",
    ],
    razorpayLink: "https://rzp.io/l/pro-plan", // Placeholder
    popular: true,
  },
  {
    name: "AI Smart",
    price: "₹1,499",
    period: "/month",
    description: "For businesses that need advanced AI",
    features: [
      "Unlimited messages",
      "Advanced AI conversations",
      "Multi-language support",
      "Custom AI training",
      "API access",
      "Dedicated account manager",
      "White-label solution",
      "Advanced integrations",
    ],
    razorpayLink: "https://rzp.io/l/ai-smart-plan", // Placeholder
    popular: false,
  },
]

export function PricingCards() {
  const handlePurchase = (razorpayLink: string, planName: string) => {
    // In a real implementation, you would integrate with Razorpay
    // For now, we'll redirect to the onboarding page
    window.location.href = `/onboarding?plan=${planName.toLowerCase()}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`relative ${plan.popular ? "border-green-500 shadow-xl scale-105" : "border-gray-200"}`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </div>
            </div>
          )}

          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
            <CardDescription className="text-gray-600">{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-600">{plan.period}</span>
            </div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${
                plan.popular
                  ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
              onClick={() => handlePurchase(plan.razorpayLink, plan.name)}
            >
              Buy Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
