import { Layout } from '@/components/layout/Layout';
import { AdBanner } from '@/components/AdBanner';
import { Users, Target, Heart, Award, Gamepad2, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: 'Steve Builder',
    role: 'Founder & Lead Editor',
    bio: 'Playing Minecraft since 2011. Passionate about helping new players discover the joy of the game.',
  },
  {
    name: 'Alex Explorer',
    role: 'Content Director',
    bio: 'Speedrunner and world explorer. Specializes in finding the best seeds and hidden secrets.',
  },
  {
    name: 'Redstone Ray',
    role: 'Technical Writer',
    bio: 'Redstone engineer with over 1000 contraption designs. Makes complex systems simple to understand.',
  },
  {
    name: 'Mod Maven',
    role: 'Mod Specialist',
    bio: 'Tests and reviews hundreds of mods yearly. Dedicated to finding safe and fun modifications.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-pixel text-2xl sm:text-3xl text-foreground mb-6">
              ABOUT <span className="text-primary">MINECRAFT WORLD</span>
            </h1>
            <p className="font-minecraft text-xl text-muted-foreground mb-8">
              We are a dedicated team of Minecraft enthusiasts committed to providing the most comprehensive, 
              accurate, and helpful resources for players of all skill levels. Our mission is to help every 
              player get the most out of their Minecraft experience.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-pixel text-xl text-foreground mb-6">
                OUR <span className="text-primary">STORY</span>
              </h2>
              <div className="space-y-4 font-minecraft text-lg text-muted-foreground">
                <p>
                  MineCraft World was founded in 2015 by a group of passionate Minecraft players who saw a 
                  need for quality, comprehensive resources in the community. What started as a small blog 
                  has grown into one of the largest Minecraft resource websites on the internet.
                </p>
                <p>
                  Over the years, we've helped millions of players improve their skills, discover new mods, 
                  find perfect world seeds, and connect with other members of the community. We take pride 
                  in our commitment to accuracy, quality, and helpfulness.
                </p>
                <p>
                  Today, our team of dedicated writers, editors, and contributors works tirelessly to bring 
                  you the latest news, guides, tutorials, and resources for all aspects of Minecraft gameplay.
                </p>
              </div>
            </div>
            <div className="pixel-border bg-card p-8 rounded">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Gamepad2 className="w-8 h-8" />, label: 'Founded 2015' },
                  { icon: <Globe className="w-8 h-8" />, label: 'Global Reach' },
                  { icon: <Users className="w-8 h-8" />, label: '50K+ Members' },
                  { icon: <Award className="w-8 h-8" />, label: 'Quality Content' },
                ].map((item, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-16 h-16 grass-block rounded flex items-center justify-center mx-auto mb-3 text-primary-foreground">
                      {item.icon}
                    </div>
                    <span className="font-minecraft text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-xl text-foreground text-center mb-12">
            OUR <span className="text-primary">MISSION & VALUES</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary-foreground" />,
                title: 'ACCURACY',
                description: 'We verify all our content thoroughly. Every guide, tutorial, and tip is tested to ensure it works as described.',
              },
              {
                icon: <Heart className="w-8 h-8 text-primary-foreground" />,
                title: 'COMMUNITY',
                description: 'Our community is at the heart of everything we do. We foster a welcoming, helpful environment for all players.',
              },
              {
                icon: <Award className="w-8 h-8 text-primary-foreground" />,
                title: 'QUALITY',
                description: 'We never compromise on quality. Our content is written by experts and reviewed by our editorial team.',
              },
            ].map((value, index) => (
              <div key={index} className="pixel-border bg-card p-6 rounded text-center">
                <div className="w-16 h-16 grass-block rounded flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-pixel text-sm text-foreground mb-3">{value.title}</h3>
                <p className="font-minecraft text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner slot="4015689675" />
      </div>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-xl text-foreground text-center mb-12">
            MEET OUR <span className="text-primary">TEAM</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="pixel-border bg-card p-6 rounded text-center">
                <div className="w-20 h-20 grass-block rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-pixel text-xs text-foreground mb-1">{member.name}</h3>
                <span className="font-minecraft text-sm text-primary block mb-3">{member.role}</span>
                <p className="font-minecraft text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-xl text-foreground text-center mb-12">
            WHAT WE <span className="text-primary">OFFER</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Comprehensive Guides',
                content: 'From beginner tutorials to advanced strategies, our guides cover every aspect of Minecraft gameplay including survival, creative mode, redstone engineering, and more.',
              },
              {
                title: 'World Seeds Collection',
                content: 'Discover thousands of carefully curated world seeds with detailed descriptions, coordinates for important structures, and screenshots of what you\'ll find.',
              },
              {
                title: 'Mod Reviews & Installation Guides',
                content: 'Stay safe while modding your game with our thorough mod reviews, compatibility guides, and step-by-step installation tutorials.',
              },
              {
                title: 'Latest News & Updates',
                content: 'Stay informed about the latest Minecraft updates, snapshots, and announcements directly from Mojang and the community.',
              },
              {
                title: 'Community Forums',
                content: 'Connect with other players, share your builds, ask questions, and participate in community events and challenges.',
              },
            ].map((item, index) => (
              <div key={index} className="pixel-border bg-card p-6 rounded">
                <h3 className="font-pixel text-sm text-primary mb-3">{item.title}</h3>
                <p className="font-minecraft text-muted-foreground">{item.content}</p>
              </div>
            ))}
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

export default About;
