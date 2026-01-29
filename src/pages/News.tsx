import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/ArticleCard';
import { AdBanner } from '@/components/AdBanner';
import { Bell } from 'lucide-react';

const newsArticles = [
  {
    id: 'news-1',
    title: 'Minecraft 1.22 Update: Everything We Know So Far',
    excerpt: 'The next major Minecraft update is on the horizon. Here\'s a comprehensive overview of all confirmed features, speculated additions, and the expected release timeline.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    author: 'News Team',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    category: 'Update News',
  },
  {
    id: 'news-2',
    title: 'Minecraft Celebrates Record Player Count in 2026',
    excerpt: 'Minecraft continues to break records with unprecedented player engagement. The beloved sandbox game shows no signs of slowing down after over a decade.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    author: 'Community Team',
    date: 'Jan 27, 2026',
    readTime: '4 min read',
    category: 'Community',
  },
  {
    id: 'news-3',
    title: 'New Partnership Announced for Minecraft Education',
    excerpt: 'Mojang announces exciting new partnerships to expand Minecraft Education Edition into more schools worldwide, bringing game-based learning to millions of students.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    author: 'Education Team',
    date: 'Jan 26, 2026',
    readTime: '6 min read',
    category: 'Education',
  },
  {
    id: 'news-4',
    title: 'Top 5 Mods Released This Week',
    excerpt: 'Check out the most popular new mods released this week, including enhanced graphics packs, new dimensions, and quality-of-life improvements.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0f?w=600&h=400&fit=crop',
    author: 'Mod Reviews',
    date: 'Jan 25, 2026',
    readTime: '7 min read',
    category: 'Mods',
  },
  {
    id: 'news-5',
    title: 'Community Spotlight: Amazing Builds of the Month',
    excerpt: 'We showcase the most impressive community builds from January 2026, featuring incredible castles, modern cities, and pixel art masterpieces.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop',
    author: 'Build Team',
    date: 'Jan 24, 2026',
    readTime: '8 min read',
    category: 'Community',
  },
  {
    id: 'news-6',
    title: 'Minecraft Championship Season 4 Announced',
    excerpt: 'The official Minecraft Championship returns for its fourth season with new games, teams, and a massive prize pool. Here are all the details.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop',
    author: 'Esports Team',
    date: 'Jan 23, 2026',
    readTime: '5 min read',
    category: 'Events',
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-pixel text-2xl sm:text-3xl text-foreground mb-4">
              LATEST <span className="text-primary">NEWS</span>
            </h1>
            <p className="font-minecraft text-xl text-muted-foreground">
              Stay updated with the latest Minecraft news, updates, community events, and announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="pixel-border bg-card p-6 rounded max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 grass-block rounded flex items-center justify-center shrink-0">
                <Bell className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-pixel text-xs text-foreground mb-1">NEVER MISS AN UPDATE</h3>
                <p className="font-minecraft text-muted-foreground">
                  Subscribe to our newsletter for weekly news and exclusive content.
                </p>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 bg-background border-2 border-border rounded font-minecraft focus:outline-none focus:border-primary"
              />
              <button className="minecraft-btn whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Featured Article */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-lg text-foreground mb-6">
            <span className="text-primary">FEATURED</span> STORY
          </h2>
          
          <article className="pixel-border bg-card rounded overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary font-minecraft text-sm rounded mb-3 w-fit">
                  {newsArticles[0].category}
                </span>
                <h3 className="font-pixel text-lg text-foreground mb-4">
                  {newsArticles[0].title}
                </h3>
                <p className="font-minecraft text-lg text-muted-foreground mb-4">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 font-minecraft text-sm text-muted-foreground">
                  <span>{newsArticles[0].author}</span>
                  <span>•</span>
                  <span>{newsArticles[0].date}</span>
                  <span>•</span>
                  <span>{newsArticles[0].readTime}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-lg text-foreground mb-6">
            MORE <span className="text-primary">NEWS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Categories Overview */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-xl text-foreground text-center mb-12">
            NEWS <span className="text-primary">CATEGORIES</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Update News', count: 45, description: 'Official Minecraft updates and patches' },
              { name: 'Community', count: 120, description: 'Player builds, events, and stories' },
              { name: 'Mods', count: 85, description: 'New mod releases and reviews' },
              { name: 'Events', count: 30, description: 'Tournaments and community events' },
            ].map((category, index) => (
              <div key={index} className="pixel-border bg-card p-6 rounded text-center hover:border-primary transition-colors cursor-pointer">
                <h3 className="font-pixel text-sm text-foreground mb-2">{category.name}</h3>
                <p className="font-minecraft text-3xl text-primary mb-2">{category.count}</p>
                <p className="font-minecraft text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
