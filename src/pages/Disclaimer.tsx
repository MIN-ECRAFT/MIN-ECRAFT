import { Layout } from '@/components/layout/Layout';
import { AdBanner } from '@/components/AdBanner';

const Disclaimer = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-pixel text-2xl sm:text-3xl text-foreground mb-8 text-center">
              <span className="text-primary">DISCLAIMER</span>
            </h1>
            
            <div className="pixel-border bg-card p-6 lg:p-8 rounded">
              <p className="font-minecraft text-muted-foreground mb-6">
                Last updated: January 28, 2026
              </p>

              <div className="space-y-8 font-minecraft text-foreground">
                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">WEBSITE DISCLAIMER</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided by MineCraft World ("we," "us," or "our") on minecraftworld.com 
                    (the "Site") is for general informational purposes only. All information on the Site is provided 
                    in good faith, however we make no representation or warranty of any kind, express or implied, 
                    regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any 
                    information on the Site.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">NOT AFFILIATED WITH MOJANG OR MICROSOFT</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    MineCraft World is an independent fan website and is NOT affiliated with, endorsed by, sponsored by, 
                    or specifically approved by Mojang Studios, Microsoft Corporation, or any of their affiliates. 
                    Minecraft is a trademark of Mojang Studios. All Minecraft-related content, images, and trademarks 
                    are the property of their respective owners.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">EXTERNAL LINKS DISCLAIMER</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Site may contain (or you may be sent through the Site) links to other websites or content 
                    belonging to or originating from third parties. Such external links are not investigated, monitored, 
                    or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. 
                    We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability 
                    of any information offered by third-party websites linked through the Site.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">MODS AND THIRD-PARTY SOFTWARE</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      When we provide information about Minecraft mods, texture packs, or other third-party software:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We do not create or maintain this third-party software</li>
                      <li>We cannot guarantee the safety or functionality of any mod or modification</li>
                      <li>Using mods may void warranties or violate terms of service with game platforms</li>
                      <li>Always download mods from official or trusted sources</li>
                      <li>Back up your game files before installing any modifications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">GAMING ADVICE DISCLAIMER</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The guides, tips, strategies, and advice provided on our Site are based on the personal experiences 
                    and opinions of our writers. Game mechanics may change with updates, and strategies that work in 
                    one version may not work in another. We encourage users to verify information and adapt strategies 
                    to their specific game version and situation.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">PROFESSIONAL DISCLAIMER</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Site cannot and does not contain professional advice. The gaming information is provided for 
                    general informational and educational purposes only and is not a substitute for professional advice. 
                    Accordingly, before taking any actions based upon such information, we encourage you to consult 
                    with the appropriate professionals if professional advice is needed.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">TESTIMONIALS DISCLAIMER</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Site may contain testimonials by users of our services. These testimonials reflect the real-life 
                    experiences and opinions of such users. However, the experiences are personal to those particular 
                    users, and may not necessarily be representative of all users of our services. We do not claim, 
                    and you should not assume, that all users will have the same experiences.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">ERRORS AND OMISSIONS DISCLAIMER</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we have made every attempt to ensure that the information contained in this Site has been 
                    obtained from reliable sources, MineCraft World is not responsible for any errors or omissions, 
                    or for the results obtained from the use of this information. All information in this Site is 
                    provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results 
                    obtained from the use of this information.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">FAIR USE DISCLAIMER</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This Site may contain copyrighted material the use of which has not always been specifically 
                    authorized by the copyright owner. We believe this constitutes a "fair use" of any such copyrighted 
                    material as provided for in section 107 of the US Copyright Law. If you wish to use copyrighted 
                    material from this site for purposes of your own that go beyond fair use, you must obtain 
                    permission from the copyright owner.
                  </p>
                </section>

                <section>
                  <h2 className="font-pixel text-sm text-primary mb-4">CONTACT US</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Disclaimer, please contact us at:
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

export default Disclaimer;
