import { Button } from "@/components/ui/button"
import { MessageCircle, Search, HelpCircle, FileText, Phone, Home } from "lucide-react"

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-coinbase-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Coinbase Support</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="flex items-center space-x-1 text-foreground hover:text-coinbase-blue transition-colors">
                <Home size={16} />
                <span>Home</span>
              </a>
              <a href="#help-center" className="flex items-center space-x-1 text-foreground hover:text-coinbase-blue transition-colors">
                <HelpCircle size={16} />
                <span>Help Center</span>
              </a>
              <a href="#submit-request" className="flex items-center space-x-1 text-foreground hover:text-coinbase-blue transition-colors">
                <FileText size={16} />
                <span>Submit a Request</span>
              </a>
              <a href="#faqs" className="flex items-center space-x-1 text-foreground hover:text-coinbase-blue transition-colors">
                <Search size={16} />
                <span>FAQs</span>
              </a>
              <a href="#live-chat" className="flex items-center space-x-1 text-foreground hover:text-coinbase-blue transition-colors">
                <MessageCircle size={16} />
                <span>Live Chat</span>
              </a>
              <a href="#contact" className="flex items-center space-x-1 text-foreground hover:text-coinbase-blue transition-colors">
                <Phone size={16} />
                <span>Contact</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="coinbase-outline" size="sm">
              Submit Request
            </Button>
            <Button variant="coinbase" size="sm">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation