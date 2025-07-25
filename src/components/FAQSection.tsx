import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, CreditCard, Lock, User, Wallet, ChevronRight } from "lucide-react"

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("security")
  
  const categories = [
    { id: "security", name: "Security", icon: Shield, count: 12 },
    { id: "transactions", name: "Transactions", icon: CreditCard, count: 15 },
    { id: "account", name: "Account Access", icon: Lock, count: 8 },
    { id: "verification", name: "Verification", icon: User, count: 6 },
    { id: "wallet", name: "Wallet", icon: Wallet, count: 10 }
  ]
  
  const faqs = {
    security: [
      {
        question: "How do I enable two-factor authentication?",
        answer: "To enable 2FA, go to Settings > Security and select 'Enable Two-Factor Authentication'. You can use an authenticator app like Google Authenticator or receive SMS codes."
      },
      {
        question: "What should I do if I suspect unauthorized access?",
        answer: "Immediately change your password, enable 2FA if not already active, and contact our support team. Review your account activity and report any suspicious transactions."
      },
      {
        question: "How does Coinbase protect my funds?",
        answer: "Coinbase stores 98% of customer funds offline in cold storage, uses bank-level security, and provides insurance coverage for digital assets stored online."
      }
    ],
    transactions: [
      {
        question: "Why is my transaction taking so long?",
        answer: "Transaction times depend on network congestion and the cryptocurrency being used. Bitcoin transactions typically take 10-60 minutes, while Ethereum may take 5-30 minutes."
      },
      {
        question: "How can I cancel a pending transaction?",
        answer: "Once a transaction is broadcast to the blockchain, it cannot be cancelled. However, if it's still pending in your Coinbase account, you may be able to cancel it from the transaction page."
      },
      {
        question: "What are network fees?",
        answer: "Network fees are paid to blockchain miners/validators to process your transaction. These fees fluctuate based on network demand and are separate from Coinbase fees."
      }
    ],
    account: [
      {
        question: "I forgot my password, how do I reset it?",
        answer: "Click 'Forgot Password' on the login page and enter your email. Follow the instructions in the reset email. Make sure to check your spam folder."
      },
      {
        question: "Why can't I access my account?",
        answer: "Common reasons include incorrect login credentials, account restrictions, or security holds. Try resetting your password or contact support if the issue persists."
      }
    ],
    verification: [
      {
        question: "What documents do I need for verification?",
        answer: "You'll need a government-issued photo ID (passport, driver's license, or state ID) and proof of address (utility bill or bank statement) that's less than 3 months old."
      },
      {
        question: "How long does verification take?",
        answer: "Most verifications are completed within 2-3 business days. During high volume periods, it may take up to 7 business days."
      }
    ],
    wallet: [
      {
        question: "What's the difference between Coinbase and Coinbase Wallet?",
        answer: "Coinbase is a centralized exchange where we custody your crypto. Coinbase Wallet is a self-custody wallet where you control your private keys."
      },
      {
        question: "How do I transfer crypto to an external wallet?",
        answer: "Go to your portfolio, select the cryptocurrency, click 'Send', enter the recipient address, specify the amount, and confirm the transaction."
      }
    ]
  }

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions organized by category
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
                <CardDescription>Select a category to view related FAQs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <div
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                        selectedCategory === category.id
                          ? 'bg-coinbase-blue text-white'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent size={16} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{category.count}</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
          
          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>
                  {categories.find(cat => cat.id === selectedCategory)?.name} Questions
                </CardTitle>
                <CardDescription>
                  Common questions about {categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs[selectedCategory as keyof typeof faqs]?.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-coinbase-blue">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection