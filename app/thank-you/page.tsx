import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, Settings, Users } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🎉 Congratulations! Your WhatsApp Bot is Being Set Up
              </h1>
              <p className="text-lg text-gray-600">
                Thank you for choosing our WhatsApp AI Bot service. We're currently configuring your automation system.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-green-500" />
                  Setup Summary
                </CardTitle>
                <CardDescription>Here's what we're setting up for your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <Settings className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Bot Configuration</h3>
                      <p className="text-sm text-gray-600">Setting up your AI responses and automation rules</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">WhatsApp Integration</h3>
                      <p className="text-sm text-gray-600">Connecting your WhatsApp Business number</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Lead Management</h3>
                      <p className="text-sm text-gray-600">Setting up your customer data collection</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Setup Completion (2-4 hours)</p>
                    <p className="text-sm text-gray-600">
                      Our team will configure your WhatsApp bot with your preferences
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Testing & Verification</p>
                    <p className="text-sm text-gray-600">We'll test your bot and send you verification instructions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Go Live!</p>
                    <p className="text-sm text-gray-600">
                      Your WhatsApp AI bot will be ready to handle customer messages
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              >
                <Link href="/dashboard">Access Dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Need help?</strong> Contact our support team at{" "}
                <a href="mailto:support@whatsappaibot.com" className="underline">
                  support@whatsappaibot.com
                </a>{" "}
                or call +91 9876543210
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
