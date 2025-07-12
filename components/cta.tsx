import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using WhatsApp AI bots to automate customer service and boost sales.
        </p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
          <Link href="/pricing">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
