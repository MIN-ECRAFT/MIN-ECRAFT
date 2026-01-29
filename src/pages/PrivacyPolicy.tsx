import { Layout } from '@/components/layout/Layout';
import { AdBanner } from '@/components/AdBanner';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-pixel text-2xl sm:text-3xl text-foreground mb-8 text-center">
              PRIVACY <span className="text-primary">POLICY</span>
            </h1>
            
            <div className="pixel-border bg-card p-6 lg:p-8 rounded">
              <p className="font-minecraft text-muted-foreground mb-6">
                Last updated: January 28, 2026
              </p>

              <div className="space-y-8 font-minecraft text-foreground">
                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">1. INTRODUCTION</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to MineCraft World ("we," "our," or "us"). We are committed to protecting your personal 
                    information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you visit our website minecraftworld.com, including any other 
                    media form, media channel, mobile website, or mobile application related or connected thereto.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">2. INFORMATION WE COLLECT</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Personal identifiers such as name and email address when you subscribe to our newsletter</li>
                      <li>Contact information when you fill out our contact forms</li>
                      <li>Account information if you create an account on our platform</li>
                      <li>Comments and feedback you leave on our articles and guides</li>
                    </ul>
                    <p className="leading-relaxed">We also automatically collect certain information when you visit our website:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Log and usage data (IP address, browser type, pages visited)</li>
                      <li>Device information (hardware model, operating system)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">3. HOW WE USE YOUR INFORMATION</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, operate, and maintain our website and services</li>
                      <li>Send you newsletters and updates you've subscribed to</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                      <li>Analyze usage patterns to improve our content and user experience</li>
                      <li>Detect, prevent, and address technical issues and security threats</li>
                      <li>Comply with legal obligations and enforce our terms of service</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">4. ADVERTISING AND THIRD-PARTY SERVICES</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to 
                      serve ads based on your prior visits to our website and other websites. You can opt out of 
                      personalized advertising by visiting Google's Ads Settings.
                    </p>
                    <p className="leading-relaxed">
                      Third-party vendors, including Google, use cookies to serve ads based on your prior website visits. 
                      Google's use of advertising cookies enables it and its partners to serve ads based on your visit 
                      to our site and/or other sites on the Internet.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">5. COOKIES AND TRACKING TECHNOLOGIES</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      We use cookies and similar tracking technologies to track activity on our website and hold certain 
                      information. Cookies are files with small amounts of data which may include an anonymous unique 
                      identifier.
                    </p>
                    <p className="leading-relaxed">
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                      However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">6. DATA RETENTION</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We will retain your personal information only for as long as is necessary for the purposes set out 
                    in this Privacy Policy. We will retain and use your information to the extent necessary to comply 
                    with our legal obligations, resolve disputes, and enforce our policies.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">7. YOUR RIGHTS</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">Depending on your location, you may have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and receive a copy of your personal data</li>
                      <li>Rectify or update your personal data</li>
                      <li>Request deletion of your personal data</li>
                      <li>Object to or restrict processing of your personal data</li>
                      <li>Withdraw consent at any time where we relied on consent</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">8. CHILDREN'S PRIVACY</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
                    identifiable information from children under 13. If you are a parent or guardian and you are aware 
                    that your child has provided us with personal data, please contact us.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">9. CHANGES TO THIS POLICY</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                    the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">10. CONTACT US</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br /><br />
                    Email: privacy@minecraftworld.com<br />
                    Address: 123 Block Street, Pixel City, MC 12345
                  </p>
                </section>
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

export default PrivacyPolicy;
