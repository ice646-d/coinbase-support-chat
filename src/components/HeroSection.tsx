import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, FileText, Clock } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-coinbase-blue via-coinbase-blue-dark to-coinbase-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Coinbase Customer Support Center
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Get instant help with your cryptocurrency transactions, account access, and security questions. 
            Our 24/7 support team is here to assist you.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Search for help topics, FAQs, or issues..." 
                className="pl-12 pr-4 py-4 text-lg bg-white border-0 shadow-lg rounded-lg"
              />
              <Button variant="coinbase" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-white/80 mb-4">Get instant support from our team</p>
              <Button variant="coinbase-outline" className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-coinbase-blue">
                Start Chat
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FileText className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Submit Request</h3>
              <p className="text-white/80 mb-4">Create a support ticket for complex issues</p>
              <Button variant="coinbase-outline" className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-coinbase-blue">
                Submit
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Clock className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Track Request</h3>
              <p className="text-white/80 mb-4">Check the status of your ticket</p>
              <Button variant="coinbase-outline" className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-coinbase-blue">
                Track
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection