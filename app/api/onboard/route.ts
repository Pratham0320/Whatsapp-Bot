import { type NextRequest, NextResponse } from "next/server"

interface OnboardingData {
  whatsappNumber: string
  businessName: string
  category: string
  messagePreferences: string
}

export async function POST(request: NextRequest) {
  try {
    const data: OnboardingData = await request.json()

    // Log the payload for now (in production, this would save to database)
    console.log("Onboarding data received:", {
      whatsappNumber: data.whatsappNumber,
      businessName: data.businessName,
      category: data.category,
      messagePreferences: data.messagePreferences,
      timestamp: new Date().toISOString(),
    })

    // Validate required fields
    if (!data.whatsappNumber || !data.businessName || !data.category || !data.messagePreferences) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Save to database (Firestore, MongoDB, etc.)
    // 2. Trigger n8n workflow creation
    // 3. Set up WhatsApp Business API integration
    // 4. Send welcome email to customer

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: "Onboarding completed successfully",
        data: {
          businessName: data.businessName,
          whatsappNumber: data.whatsappNumber,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing onboarding:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
