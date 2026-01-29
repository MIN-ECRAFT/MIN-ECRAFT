import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  variant?: 'default' | 'diamond' | 'gold' | 'grass';
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  link,
  variant = 'default' 
}: FeatureCardProps) => {
  const glowClass = {
    default: '',
    diamond: 'glow-diamond',
    gold: 'glow-gold',
    grass: 'hover:border-primary',
  }[variant];

  const content = (
    <div className={`pixel-border bg-card p-6 rounded transition-all duration-300 hover:-translate-y-2 ${glowClass}`}>
      <div className="w-12 h-12 grass-block rounded flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-pixel text-xs text-foreground mb-3">{title}</h3>
      <p className="font-minecraft text-lg text-muted-foreground">{description}</p>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};
