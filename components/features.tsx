import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Brain, Database, Zap, Clock, Users } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Auto Replies",
    description: "Instant responses to customer queries 24/7. Never miss a potential lead again.",
  },
  {
    icon: Brain,
    title: "ChatGPT Integration",
    description: "AI-powered conversations that understand context and provide intelligent responses.",
  },
  {
    icon: Database,
    title: "Lead Storage",
    description: "Automatically capture and organize customer information for follow-up.",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Get your WhatsApp bot running in minutes with our simple onboarding process.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your AI assistant works around the clock, even when you sleep.",
  },
  {
    icon: Users,
    title: "Multi-Agent Support",
    description: "Handle multiple conversations simultaneously with intelligent routing.",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate and scale your WhatsApp business communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
