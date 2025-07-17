import { NextRequest, NextResponse } from "next/server";

type OnboardingData = {
  whatsappNumber: string;
  businessName: string;
  category: string;
  messagePreferences: string;
};

export async function POST(request: NextRequest) {
  try {
    const data: OnboardingData = await request.json();

    console.log("Received onboarding data:", data);

    // Step 1: Trigger your n8n webhook
    console.log("Calling n8n with:", data)
    const webhookResponse = await fetch(
      "https://maverick0320.app.n8n.cloud/webhook/auto-bot-setup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!webhookResponse.ok) {
      console.error("n8n call failed:", await webhookResponse.text());
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
