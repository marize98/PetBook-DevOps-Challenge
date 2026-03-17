import React from 'react';
import { Post } from '../types';

interface PetCardProps {
  post: Post;
  index: number;
}

/**
 * PetCard Component
 * Muestra una publicación individual con efectos de hover premium y animaciones escalonadas.
 * Implementa el patrón de diseño de 'Cards' con elevación dinámica.
 */
const PetCard: React.FC<PetCardProps> = ({ post, index }) => {
  return (
    <article 
      className="post-card fade-in" 
      style={{ animationDelay: `${index * 0.15}s` }}
      aria-labelledby={`post-title-${post.id}`}
    >
      <div className="post-img-container">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="post-img" 
          loading="lazy"
        />
      </div>
      <div className="post-content">
        <h3 id={`post-title-${post.id}`} className="post-title">
          {post.title}
        </h3>
        <div className="post-author-chip">
          <span aria-hidden="true">🐾</span>
          <span>{post.author}</span>
        </div>
      </div>
    </article>
  );
};

export default PetCard;
