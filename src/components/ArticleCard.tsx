import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const ArticleCard = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
}: ArticleCardProps) => {
  return (
    <article className="pixel-border bg-card rounded overflow-hidden group">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-3 py-1 bg-primary/20 text-primary font-minecraft text-sm rounded mb-3">
          {category}
        </span>
        <h3 className="font-pixel text-xs text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link to={`/article/${id}`}>{title}</Link>
        </h3>
        <p className="font-minecraft text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm font-minecraft text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </div>
      </div>
    </article>
  );
};
