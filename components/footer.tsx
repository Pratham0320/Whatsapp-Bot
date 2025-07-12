import { MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MessageCircle className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">WhatsApp AI Bot</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Automate your WhatsApp business communication with AI-powered bots. Increase sales, improve customer
              service, and scale your business 24/7.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-4 w-4" />
              <span>support@whatsappaibot.com</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-white">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="hover:text-white">
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/help" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WhatsApp AI Bot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
