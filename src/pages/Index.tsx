import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { FeatureCard } from '@/components/FeatureCard';
import { ArticleCard } from '@/components/ArticleCard';
import { AdBanner } from '@/components/AdBanner';
import { 
  Sword, 
  Shield, 
  Map, 
  Users, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  Pickaxe
} from 'lucide-react';

const featuredArticles = [
  {
    id: '1',
    title: 'Complete Beginner Guide to Minecraft Survival Mode',
    excerpt: 'Learn everything you need to know to survive your first night and thrive in Minecraft. From crafting basics to building your first shelter.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    author: 'Steve Builder',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    category: 'Guides',
  },
  {
    id: '2',
    title: 'Top 10 Best Minecraft Seeds for 2026',
    excerpt: 'Discover the most amazing world seeds with stunning landscapes, rare biomes, and perfect spawn locations for your next adventure.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    author: 'Alex Explorer',
    date: 'Jan 27, 2026',
    readTime: '6 min read',
    category: 'Seeds',
  },
  {
    id: '3',
    title: 'How to Install and Manage Minecraft Mods Safely',
    excerpt: 'A comprehensive guide to installing mods, using mod loaders, and keeping your game safe while enhancing your Minecraft experience.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0f?w=600&h=400&fit=crop',
    author: 'Modder Pro',
    date: 'Jan 26, 2026',
    readTime: '10 min read',
    category: 'Mods',
  },
];

const features = [
  {
    icon: <Sword className="w-6 h-6 text-primary-foreground" />,
    title: 'SURVIVAL GUIDES',
    description: 'Master survival mode with our comprehensive guides covering everything from first night strategies to defeating the Ender Dragon.',
    link: '/guides',
    variant: 'grass' as const,
  },
  {
    icon: <Map className="w-6 h-6 text-primary-foreground" />,
    title: 'WORLD SEEDS',
    description: 'Explore our curated collection of the best world seeds featuring rare biomes, structures, and stunning landscapes.',
    link: '/guides',
    variant: 'diamond' as const,
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary-foreground" />,
    title: 'MOD REVIEWS',
    description: 'Discover the best mods to enhance your gameplay with detailed reviews, installation guides, and compatibility information.',
    link: '/guides',
    variant: 'gold' as const,
  },
  {
    icon: <Shield className="w-6 h-6 text-primary-foreground" />,
    title: 'PVP STRATEGIES',
    description: 'Learn advanced combat techniques, gear optimization, and tactical strategies to dominate in player versus player battles.',
    link: '/guides',
    variant: 'default' as const,
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary-foreground" />,
    title: 'REDSTONE TUTORIALS',
    description: 'Unlock the power of redstone with step-by-step tutorials from basic circuits to complex automated systems.',
    link: '/guides',
    variant: 'grass' as const,
  },
  {
    icon: <Users className="w-6 h-6 text-primary-foreground" />,
    title: 'COMMUNITY',
    description: 'Join our vibrant community of players to share builds, discuss strategies, and participate in events.',
    link: '/about',
    variant: 'diamond' as const,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grass-block opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Pickaxe className="w-4 h-4 text-primary" />
              <span className="font-minecraft text-primary">Welcome to the Ultimate Minecraft Resource</span>
            </div>
            
            <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 leading-relaxed">
              YOUR MINECRAFT<br />
              <span className="text-primary">ADVENTURE STARTS HERE</span>
            </h1>
            
            <p className="font-minecraft text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover guides, tips, mods, seeds, and join our community of millions of players. 
              Everything you need to master Minecraft in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/guides" className="minecraft-btn">
                Explore Guides
              </Link>
              <Link to="/about" className="minecraft-btn !bg-secondary hover:!bg-accent">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-pixel text-xl sm:text-2xl text-foreground mb-4">
              EXPLORE OUR <span className="text-primary">RESOURCES</span>
            </h2>
            <p className="font-minecraft text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a beginner or a seasoned player, we have everything you need to enhance your Minecraft experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Latest Articles Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="font-pixel text-xl sm:text-2xl text-foreground mb-2">
                LATEST <span className="text-primary">ARTICLES</span>
              </h2>
              <p className="font-minecraft text-lg text-muted-foreground">
                Stay updated with the latest Minecraft news, guides, and tips.
              </p>
            </div>
            <Link 
              to="/news" 
              className="flex items-center gap-1 font-minecraft text-primary hover:underline"
            >
              View All Articles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Guides & Tutorials' },
              { value: '1M+', label: 'Monthly Readers' },
              { value: '10K+', label: 'World Seeds' },
              { value: '50K+', label: 'Community Members' },
            ].map((stat, index) => (
              <div key={index} className="pixel-border bg-card p-6 text-center">
                <div className="font-pixel text-2xl sm:text-3xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-minecraft text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="pixel-border bg-gradient-to-r from-primary/20 to-accent/20 p-8 lg:p-12 rounded text-center">
            <h2 className="font-pixel text-xl sm:text-2xl text-foreground mb-4">
              READY TO START YOUR <span className="text-primary">ADVENTURE?</span>
            </h2>
            <p className="font-minecraft text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our community today and get access to exclusive guides, tips, and resources. 
              Connect with fellow players and share your Minecraft journey!
            </p>
            <Link to="/contact" className="minecraft-btn inline-block">
              Join Our Community
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
