import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/ArticleCard';
import { AdBanner } from '@/components/AdBanner';
import { Search } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Survival', 'Redstone', 'Building', 'Mods', 'Seeds', 'PvP'];

const allGuides = [
  {
    id: '1',
    title: 'Complete Beginner Guide to Minecraft Survival Mode',
    excerpt: 'Learn everything you need to know to survive your first night and thrive in Minecraft. From crafting basics to building your first shelter, this comprehensive guide covers all the essentials.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    author: 'Steve Builder',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    category: 'Survival',
  },
  {
    id: '2',
    title: 'Top 10 Best Minecraft Seeds for 2026',
    excerpt: 'Discover the most amazing world seeds with stunning landscapes, rare biomes, and perfect spawn locations for your next adventure. Each seed has been tested and verified.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    author: 'Alex Explorer',
    date: 'Jan 27, 2026',
    readTime: '6 min read',
    category: 'Seeds',
  },
  {
    id: '3',
    title: 'How to Install and Manage Minecraft Mods Safely',
    excerpt: 'A comprehensive guide to installing mods, using mod loaders like Forge and Fabric, and keeping your game safe while enhancing your Minecraft experience.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0f?w=600&h=400&fit=crop',
    author: 'Modder Pro',
    date: 'Jan 26, 2026',
    readTime: '10 min read',
    category: 'Mods',
  },
  {
    id: '4',
    title: 'Redstone Basics: Your First Automated Door',
    excerpt: 'Start your redstone journey with this beginner-friendly tutorial. Learn how to create a simple automated door system using basic redstone components.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=600&h=400&fit=crop',
    author: 'Redstone Ray',
    date: 'Jan 25, 2026',
    readTime: '12 min read',
    category: 'Redstone',
  },
  {
    id: '5',
    title: 'Building Beautiful Houses: Design Principles',
    excerpt: 'Transform your basic cobblestone boxes into stunning houses with these design principles. Learn about proportions, materials, and decorating techniques.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop',
    author: 'Build Master',
    date: 'Jan 24, 2026',
    readTime: '15 min read',
    category: 'Building',
  },
  {
    id: '6',
    title: 'PvP Combat Guide: Dominate Your Opponents',
    excerpt: 'Master PvP combat with advanced techniques, gear optimization strategies, and tactical positioning. Become a formidable opponent in any battle.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop',
    author: 'PvP Champion',
    date: 'Jan 23, 2026',
    readTime: '10 min read',
    category: 'PvP',
  },
  {
    id: '7',
    title: 'Advanced Farming: Automatic Crop Systems',
    excerpt: 'Take your farming to the next level with automatic crop harvesting systems. This guide covers water-based, observer-based, and villager-based designs.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    author: 'Farm Expert',
    date: 'Jan 22, 2026',
    readTime: '14 min read',
    category: 'Redstone',
  },
  {
    id: '8',
    title: 'Nether Survival: Complete Guide',
    excerpt: 'Everything you need to know about surviving and thriving in the Nether dimension. From portal strategies to fortress finding and blaze farming.',
    image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=600&h=400&fit=crop',
    author: 'Nether Navigator',
    date: 'Jan 21, 2026',
    readTime: '11 min read',
    category: 'Survival',
  },
  {
    id: '9',
    title: 'Medieval Castle Building Tutorial',
    excerpt: 'Create an impressive medieval castle with this step-by-step building tutorial. Includes tips for towers, walls, interior design, and defensive features.',
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=600&h=400&fit=crop',
    author: 'Castle Architect',
    date: 'Jan 20, 2026',
    readTime: '20 min read',
    category: 'Building',
  },
];

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGuides = allGuides.filter((guide) => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-pixel text-2xl sm:text-3xl text-foreground mb-4">
              MINECRAFT <span className="text-primary">GUIDES</span>
            </h1>
            <p className="font-minecraft text-xl text-muted-foreground mb-8">
              Explore our comprehensive collection of guides, tutorials, and tips for all aspects of Minecraft gameplay.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border-4 border-border rounded font-minecraft text-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-minecraft text-lg transition-colors rounded ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {filteredGuides.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => (
                <ArticleCard key={guide.id} {...guide} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-minecraft text-xl text-muted-foreground">
                No guides found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* More Content Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-pixel text-xl text-foreground text-center mb-8">
              WHY OUR <span className="text-primary">GUIDES?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Verified & Tested',
                  description: 'Every guide is tested in-game by our team before publication to ensure accuracy and reliability.',
                },
                {
                  title: 'Beginner Friendly',
                  description: 'Clear explanations and step-by-step instructions make our guides accessible to players of all levels.',
                },
                {
                  title: 'Regularly Updated',
                  description: 'We update our guides with each Minecraft version to keep information current and relevant.',
                },
                {
                  title: 'Community Feedback',
                  description: 'Our guides incorporate feedback from thousands of players to address common questions and issues.',
                },
              ].map((item, index) => (
                <div key={index} className="pixel-border bg-card p-5 rounded">
                  <h3 className="font-pixel text-xs text-primary mb-2">{item.title}</h3>
                  <p className="font-minecraft text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Guides;
