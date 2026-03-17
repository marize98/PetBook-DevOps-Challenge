import React from 'react';
import { Post } from '../types';
import PetCard from './PetCard';

interface PetFeedProps {
  posts: Post[];
}

const PetFeed: React.FC<PetFeedProps> = ({ posts }) => {
  return (
    <div className="feed-grid">
      {posts.map((post, index) => (
        <PetCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default PetFeed;
