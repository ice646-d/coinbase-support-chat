import { Shield, AlertTriangle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-coinbase-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-semibold">Coinbase Support</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner in cryptocurrency support and assistance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="https://coinbase.com" className="hover:text-white transition-colors">Coinbase.com</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Hours</h3>
            <div className="text-gray-300 space-y-1">
              <p>24/7 Live Chat Support</p>
              <p>Email: 2-4 hours response</p>
              <p>Phone: Business hours</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-red-300 font-semibold mb-1">Important Security Notice</h4>
                <p className="text-red-200 text-sm">
                  This is a support page only. Never share your private keys, passwords, or seed phrases with anyone. 
                  Coinbase will never ask for your login credentials outside of our official website.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Coinbase Support Center. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Shield className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Secured by SSL encryption</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer