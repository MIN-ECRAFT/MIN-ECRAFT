import { Layout } from '@/components/layout/Layout';
import { AdBanner } from '@/components/AdBanner';

const TermsOfService = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-pixel text-2xl sm:text-3xl text-foreground mb-8 text-center">
              TERMS OF <span className="text-primary">SERVICE</span>
            </h1>
            
            <div className="pixel-border bg-card p-6 lg:p-8 rounded">
              <p className="font-minecraft text-muted-foreground mb-6">
                Last updated: January 28, 2026
              </p>

              <div className="space-y-8 font-minecraft text-foreground">
                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">1. ACCEPTANCE OF TERMS</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using MineCraft World (minecraftworld.com), you accept and agree to be bound by 
                    the terms and provisions of this agreement. If you do not agree to abide by these terms, please 
                    do not use this website. We reserve the right to change these terms at any time, and your 
                    continued use of the website constitutes acceptance of those changes.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">2. DESCRIPTION OF SERVICE</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    MineCraft World provides Minecraft-related content including but not limited to guides, tutorials, 
                    news articles, mod reviews, world seeds, and community resources. Our content is intended for 
                    informational and entertainment purposes only. We are not affiliated with, endorsed by, or 
                    sponsored by Mojang Studios or Microsoft Corporation.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">3. USER CONDUCT</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">When using our website, you agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use the website for any unlawful purpose or in violation of any laws</li>
                      <li>Harass, abuse, or harm other users</li>
                      <li>Post or transmit spam, malware, or harmful content</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Impersonate others or provide false information</li>
                      <li>Interfere with the proper functioning of the website</li>
                      <li>Copy, reproduce, or redistribute our content without permission</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">4. INTELLECTUAL PROPERTY</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      All content on this website, including text, graphics, logos, images, and software, is the 
                      property of MineCraft World or its content suppliers and is protected by copyright and other 
                      intellectual property laws.
                    </p>
                    <p className="leading-relaxed">
                      Minecraft and all associated trademarks are the property of Mojang Studios and Microsoft 
                      Corporation. Our use of Minecraft-related content is for informational purposes and does not 
                      imply any affiliation with or endorsement by the trademark owners.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">5. USER-GENERATED CONTENT</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      Users may submit comments, feedback, and other content to our website. By submitting content, 
                      you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, 
                      reproduce, and distribute your content in connection with our services.
                    </p>
                    <p className="leading-relaxed">
                      You are solely responsible for the content you submit. We reserve the right to remove any 
                      content that violates these terms or is otherwise objectionable.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">6. THIRD-PARTY LINKS AND CONTENT</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites or services that are not owned or controlled 
                    by MineCraft World. We have no control over, and assume no responsibility for, the content, privacy 
                    policies, or practices of any third-party websites or services. We strongly advise you to read the 
                    terms and conditions and privacy policy of any third-party website that you visit.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">7. DISCLAIMER OF WARRANTIES</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      The website and its content are provided "as is" and "as available" without any warranties of 
                      any kind, either express or implied. We do not warrant that the website will be uninterrupted, 
                      secure, or error-free.
                    </p>
                    <p className="leading-relaxed">
                      While we strive to provide accurate information, we make no guarantees about the accuracy, 
                      completeness, or timeliness of any content on our website. Game mechanics, features, and 
                      information may change with updates to Minecraft.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">8. LIMITATION OF LIABILITY</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall MineCraft World, its owners, employees, or affiliates be liable for any indirect, 
                    incidental, special, consequential, or punitive damages arising out of or related to your use of 
                    the website. This includes, but is not limited to, damages for loss of profits, data, or other 
                    intangible losses.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">9. INDEMNIFICATION</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless MineCraft World and its owners, employees, and affiliates 
                    from any claims, damages, losses, or expenses (including reasonable attorney fees) arising out of 
                    your use of the website, your violation of these terms, or your violation of any rights of another.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">10. GOVERNING LAW</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the 
                    jurisdiction in which MineCraft World operates, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">11. CONTACT INFORMATION</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                    <br /><br />
                    Email: legal@minecraftworld.com<br />
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

export default TermsOfService;
