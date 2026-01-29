import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AdBanner } from '@/components/AdBanner';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-pixel text-2xl sm:text-3xl text-foreground mb-4">
              CONTACT <span className="text-primary">US</span>
            </h1>
            <p className="font-minecraft text-xl text-muted-foreground">
              Have questions, suggestions, or feedback? We'd love to hear from you! 
              Our team is here to help with any inquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Contact Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-pixel text-lg text-foreground mb-6">
                SEND US A <span className="text-primary">MESSAGE</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-minecraft text-foreground mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-card border-4 border-border rounded font-minecraft focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-minecraft text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-card border-4 border-border rounded font-minecraft focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-minecraft text-foreground mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border-4 border-border rounded font-minecraft focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="advertising">Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-minecraft text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-card border-4 border-border rounded font-minecraft focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="minecraft-btn flex items-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-pixel text-lg text-foreground mb-6">
                  GET IN <span className="text-primary">TOUCH</span>
                </h2>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      label: 'Email',
                      value: 'contact@minecraftworld.com',
                      description: 'Send us an email anytime',
                    },
                    {
                      icon: <Phone className="w-5 h-5" />,
                      label: 'Phone',
                      value: '+1 (555) 123-4567',
                      description: 'Monday to Friday, 9am - 6pm EST',
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      label: 'Address',
                      value: '123 Block Street, Pixel City, MC 12345',
                      description: 'Our virtual headquarters',
                    },
                  ].map((item, index) => (
                    <div key={index} className="pixel-border bg-card p-4 rounded flex items-start gap-4">
                      <div className="w-10 h-10 grass-block rounded flex items-center justify-center shrink-0 text-primary-foreground">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-pixel text-xs text-foreground">{item.label}</h3>
                        <p className="font-minecraft text-lg text-primary">{item.value}</p>
                        <p className="font-minecraft text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="pixel-border bg-card p-6 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-pixel text-sm text-foreground">RESPONSE TIME</h3>
                </div>
                <p className="font-minecraft text-muted-foreground mb-4">
                  We typically respond to all inquiries within 24-48 hours during business days. 
                  For urgent matters, please indicate so in your message subject.
                </p>
                <div className="flex items-center gap-2 text-primary font-minecraft">
                  <CheckCircle className="w-4 h-4" />
                  Average response time: 12 hours
                </div>
              </div>

              {/* FAQ Link */}
              <div className="pixel-border bg-card p-6 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="font-pixel text-sm text-foreground">COMMON QUESTIONS</h3>
                </div>
                <p className="font-minecraft text-muted-foreground mb-4">
                  Before contacting us, you might find your answer in our frequently asked questions section.
                </p>
                <ul className="space-y-2 font-minecraft text-muted-foreground">
                  <li>• How do I submit a guide or article?</li>
                  <li>• Can I advertise on your website?</li>
                  <li>• How do I report a bug or issue?</li>
                  <li>• Are you affiliated with Mojang?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>
    </Layout>
  );
};

export default Contact;
