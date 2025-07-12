export interface User {
  id: string
  email: string
  businessName: string
  whatsappNumber: string
  plan: "starter" | "pro" | "ai-smart"
  createdAt: Date
}

export interface OnboardingData {
  whatsappNumber: string
  businessName: string
  category: string
  messagePreferences: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  razorpayLink: string
  popular: boolean
}

export interface Conversation {
  id: string
  customerName: string
  customerNumber: string
  lastMessage: string
  timestamp: Date
  status: "new" | "answered" | "scheduled" | "closed"
}

export interface BotStats {
  totalMessages: number
  activeLeads: number
  responseRate: number
  avgResponseTime: string
}
