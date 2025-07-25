import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CreditCard, Lock, User, Wallet, ArrowRight } from "lucide-react"

const PopularTopics = () => {
  const topics = [
    {
      icon: Shield,
      title: "Security & Account Safety",
      description: "Two-factor authentication, suspicious activity, and account security",
      count: "245 articles"
    },
    {
      icon: CreditCard,
      title: "Transaction Issues",
      description: "Delayed transactions, failed payments, and transaction history",
      count: "189 articles"
    },
    {
      icon: Lock,
      title: "Account Access",
      description: "Login problems, password reset, and account recovery",
      count: "156 articles"
    },
    {
      icon: User,
      title: "Identity Verification",
      description: "ID verification, document upload, and verification status",
      count: "98 articles"
    },
    {
      icon: Wallet,
      title: "Wallet & Trading",
      description: "Crypto wallets, trading features, and portfolio management",
      count: "134 articles"
    },
    {
      icon: CreditCard,
      title: "Fees & Limits",
      description: "Trading fees, withdrawal limits, and pricing information",
      count: "76 articles"
    }
  ]

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Help Topics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to the most common questions and issues
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md hover:scale-[1.02] group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-coinbase-blue/10 rounded-lg flex items-center justify-center group-hover:bg-coinbase-blue/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-coinbase-blue" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-coinbase-blue group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-coinbase-blue transition-colors">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-3">
                    {topic.description}
                  </CardDescription>
                  <p className="text-sm text-coinbase-blue font-medium">
                    {topic.count}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PopularTopics