import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Globe, Users } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">About Coinbase</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Coinbase is a secure platform that makes it easy to buy, sell, and manage cryptocurrency. 
              Our support center provides 24/7 assistance to users worldwide. We're here to help with 
              everything from account access to crypto withdrawals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 100 million verified users globally, we're committed to providing the best 
              customer support experience in the cryptocurrency industry. Our team of experts is 
              available around the clock to ensure your crypto journey is smooth and secure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6 border-0 shadow-md">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-coinbase-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
                <p className="text-muted-foreground">Secure Platform</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-coinbase-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
                <p className="text-muted-foreground">Support Available</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-coinbase-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-coinbase-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">100M+</h3>
                <p className="text-muted-foreground">Verified Users</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection