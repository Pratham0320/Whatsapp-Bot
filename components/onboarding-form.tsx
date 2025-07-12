"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

interface FormData {
  whatsappNumber: string
  businessName: string
  category: string
  messagePreferences: string
}

export function OnboardingForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    whatsappNumber: "",
    businessName: "",
    category: "",
    messagePreferences: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required"
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.whatsappNumber.replace(/\s/g, ""))) {
      newErrors.whatsappNumber = "Please enter a valid WhatsApp number"
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required"
    }

    if (!formData.category) {
      newErrors.category = "Please select a business category"
    }

    if (!formData.messagePreferences.trim()) {
      newErrors.messagePreferences = "Message preferences are required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/onboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/thank-you")
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your information. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Information</CardTitle>
        <CardDescription>Please provide your business details to set up your WhatsApp automation bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="whatsappNumber">WhatsApp Business Number *</Label>
            <Input
              id="whatsappNumber"
              type="tel"
              placeholder="+91 9876543210"
              value={formData.whatsappNumber}
              onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
              className={errors.whatsappNumber ? "border-red-500" : ""}
            />
            {errors.whatsappNumber && <p className="text-sm text-red-500">{errors.whatsappNumber}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              placeholder="Your Business Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange("businessName", e.target.value)}
              className={errors.businessName ? "border-red-500" : ""}
            />
            {errors.businessName && <p className="text-sm text-red-500">{errors.businessName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Business Category *</Label>
            <Select onValueChange={(value) => handleInputChange("category", value)}>
              <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                <SelectValue placeholder="Select your business category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="restaurant">Restaurant/Food</SelectItem>
                <SelectItem value="realestate">Real Estate</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="services">Professional Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="messagePreferences">Message Preferences *</Label>
            <Textarea
              id="messagePreferences"
              placeholder="Describe how you want your bot to respond to customers. For example: 'Friendly and professional tone, focus on product information and booking appointments.'"
              value={formData.messagePreferences}
              onChange={(e) => handleInputChange("messagePreferences", e.target.value)}
              className={errors.messagePreferences ? "border-red-500" : ""}
              rows={4}
            />
            {errors.messagePreferences && <p className="text-sm text-red-500">{errors.messagePreferences}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Setting Up Your Bot..." : "Complete Setup"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
