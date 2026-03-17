import React, { useState, useEffect } from 'react';
import './index.css';
import logo from './assets/logo.png';
import galleryImg from './assets/gallery.png';

interface Post {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}

const INITIAL_POSTS: Post[] = [
  { id: 1, title: 'Golden Morning ☀️', author: 'Luna the Golden', imageUrl: galleryImg },
  { id: 2, title: 'Coffee & Paws ☕', author: 'Oliver Twist', imageUrl: galleryImg },
  { id: 3, title: 'Beach Day! 🏖️', author: 'Bella Blue', imageUrl: galleryImg },
  { id: 4, title: 'Nap Queen 👑', author: 'Daisy', imageUrl: galleryImg },
  { id: 5, title: 'Adventure awaits 🌲', author: 'Rocky', imageUrl: galleryImg },
  { id: 6, title: 'Mirror Mirror 🪞', author: 'Coco Chanel', imageUrl: galleryImg },
];

function App() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate a premium upload experience
    setTimeout(() => {
      const newPost: Post = {
        id: Date.now(),
        title: 'New Friend Alert! 🐾',
        author: 'PetBook Community',
        imageUrl: galleryImg,
      };
      setPosts([newPost, ...posts]);
      setIsUploading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="app-container">
      <nav className="nav fade-in">
        <div className="logo-container">
          <img src={logo} alt="PetBook Logo" className="logo-img" />
          <h1 className="logo-text">PetBook</h1>
        </div>
        <button 
          className="btn-primary" 
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Publicar Foto'}
        </button>
      </nav>

      <main>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }} className="fade-in">
          <h2 style={{ fontSize: '2.5rem', color: '#2C3E50' }}>¡Captura momentos, comparte el amor puro! 🐕🐈</h2>
          <p style={{ color: '#7F8C8D', fontSize: '1.2rem', fontWeight: '500' }}>Bienvenidos a la comunidad de mascotas más activa y tierna del planeta.</p>
        </header>

        <div className="feed-grid">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="post-card fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={post.imageUrl} alt={post.title} className="post-img" />
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-author">{post.author}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ marginTop: '5rem', padding: '2rem', textAlign: 'center', color: '#BDC3C7' }}>
        <p>&copy; 2026 PetBook DevOps Challenge. Built with ❤️ by PetBook Engineering.</p>
      </footer>
    </div>
  );
}

export default App;
