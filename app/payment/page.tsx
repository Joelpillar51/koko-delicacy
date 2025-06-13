"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Copy, 
  CheckCircle, 
  CreditCard, 
  MessageCircle, 
  ArrowLeft,
  Phone,
  Clock,
  Shield
} from "lucide-react"
import { useState } from "react"
import SimplePrizeSection from "@/components/simple-prize-section"

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const accountDetails = {
    accountNumber: "8145599882",
    bank: "Opay",
    accountName: "Mary Effiong okon"
  }

  const whatsappNumber = "2348145599882" // Format for WhatsApp link
  const whatsappMessage = encodeURIComponent("Hello! I just made payment for the Nigerian Cooking Masterclass. Please add me to the Telegram group.")

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEFDF] to-[#FFF3EA]">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/koko-logo.svg"
              alt="KOKO Delicacy Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-lg font-bold text-[#E8630A]">Koko's Delicacy</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-[#E8630A] text-[#E8630A] hover:bg-[#E8630A]/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Prize Section */}
      <SimplePrizeSection />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="bg-[#E8630A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Almost There!</h1>
            <p className="text-gray-600">Complete your payment to secure your spot in the cooking class</p>
          </div>

          {/* Payment Instructions Card */}
          <Card className="mb-6 shadow-xl border-0">
            <CardHeader className="bg-[#E8630A] text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Account Details */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Send ₦10,000 to:</h3>
                  
                  <div className="space-y-4">
                    {/* Account Number */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                      <div>
                        <p className="text-sm text-gray-600">Account Number</p>
                        <p className="font-bold text-lg text-gray-900">{accountDetails.accountNumber}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(accountDetails.accountNumber, 'account')}
                        className="border-[#E8630A] text-[#E8630A] hover:bg-[#E8630A] hover:text-white"
                      >
                        {copiedField === 'account' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    {/* Bank */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                      <div>
                        <p className="text-sm text-gray-600">Bank</p>
                        <p className="font-bold text-lg text-gray-900">{accountDetails.bank}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(accountDetails.bank, 'bank')}
                        className="border-[#E8630A] text-[#E8630A] hover:bg-[#E8630A] hover:text-white"
                      >
                        {copiedField === 'bank' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    {/* Account Name */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                      <div>
                        <p className="text-sm text-gray-600">Account Name</p>
                        <p className="font-bold text-lg text-gray-900">{accountDetails.accountName}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(accountDetails.accountName, 'name')}
                        className="border-[#E8630A] text-[#E8630A] hover:bg-[#E8630A] hover:text-white"
                      >
                        {copiedField === 'name' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div className="text-center p-4 bg-[#E8630A]/10 rounded-lg border border-[#E8630A]/20">
                  <p className="text-sm text-gray-600">Amount to Pay</p>
                  <p className="text-3xl font-bold text-[#E8630A]">₦10,000</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Card */}
          <Card className="mb-6 shadow-xl border-0">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                After Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Once you've made the payment, click the button below to message us on WhatsApp with your payment proof:
                </p>
                
                <a
                  href="https://wa.link/x7lixk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Message on WhatsApp
                  </Button>
                </a>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Send your payment screenshot and you'll be added to the Telegram group immediately!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#E8630A]" />
                Important Notes
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-[#E8630A]" />
                  <span>Class starts soon! Complete payment quickly to secure your spot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-[#E8630A]" />
                  <span>After payment, you MUST message on WhatsApp to be added to the group.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-[#E8630A]" />
                  <span>Keep your payment receipt ready to send via WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-[#E8630A]" />
                  <span>You'll receive immediate access to all course materials once verified.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image
                src="/images/koko-logo.svg"
                alt="KOKO Delicacy Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-bold text-[#E8630A]">Koko's Delicacy</span>
            </div>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Koko's Delicacy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 