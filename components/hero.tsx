import { Button } from "@/components/ui/button"
import { ArrowRight, Bot } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Bot className="h-4 w-4" />
              <span>AI-Powered WhatsApp Automation</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Automate Your WhatsApp
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Business Communication
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your customer service with AI-powered WhatsApp bots. Auto-replies, lead generation, and ChatGPT
            integration to scale your business 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              asChild
            >
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          <div className="mt-16">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="WhatsApp AI Bot Interface"
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
