import { Link } from 'react-router-dom';
import { Pickaxe, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-4 border-minecraft-bedrock">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 grass-block rounded flex items-center justify-center">
                <Pickaxe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-pixel text-sm text-primary">MINECRAFT</span>
            </Link>
            <p className="font-minecraft text-muted-foreground">
              Your ultimate destination for Minecraft guides, tips, mods, and community resources. Join millions of players worldwide!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-pixel text-xs text-primary mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 font-minecraft">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">News</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-pixel text-xs text-primary mb-4">LEGAL</h3>
            <ul className="space-y-2 font-minecraft">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-pixel text-xs text-primary mb-4">CONTACT US</h3>
            <ul className="space-y-3 font-minecraft">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                contact@minecraftworld.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                123 Block Street, Pixel City, MC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-minecraft text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} MineCraft World. All rights reserved. Not affiliated with Mojang or Microsoft.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-minecraft">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-minecraft">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-minecraft">
                YouTube
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-minecraft">
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
