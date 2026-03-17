import React from 'react';
import { Post } from '../types';

interface PetCardProps {
  post: Post;
  index: number;
}

const PetCard: React.FC<PetCardProps> = ({ post, index }) => {
  return (
    <div 
      className="post-card fade-in" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img src={post.imageUrl} alt={post.title} className="post-img" />
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <div className="post-author">{post.author}</div>
      </div>
    </div>
  );
};

export default PetCard;
