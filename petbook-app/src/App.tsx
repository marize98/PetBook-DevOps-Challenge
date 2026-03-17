import { useState } from 'react';
import './index.css';
import logo from './assets/logo.png';
import galleryImg from './assets/gallery.png';
import { Post } from './types';
import Navbar from './components/Navbar';
import PetFeed from './components/PetFeed';

const INITIAL_POSTS: Post[] = [
  { id: 1, title: 'Mañana Dorada ☀️', author: 'Luna la Golden', imageUrl: galleryImg },
  { id: 2, title: 'Café y Patitas ☕', author: 'Oliver Twist', imageUrl: galleryImg },
  { id: 3, title: '¡Día de Playa! 🏖️', author: 'Bella Blue', imageUrl: galleryImg },
  { id: 4, title: 'Reina de la Siesta 👑', author: 'Daisy', imageUrl: galleryImg },
  { id: 5, title: 'La aventura espera 🌲', author: 'Rocky', imageUrl: galleryImg },
  { id: 6, title: 'Espejito Espejito 🪞', author: 'Coco Chanel', imageUrl: galleryImg },
];

function App() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      const newPost: Post = {
        id: Date.now(),
        title: '¡Nuevo amigo detectado! 🐾',
        author: 'Comunidad PetBook',
        imageUrl: galleryImg,
      };
      setPosts([newPost, ...posts]);
      setIsUploading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="app-container">
      <Navbar logo={logo} onUpload={handleUpload} isUploading={isUploading} />

      <main>
        <header style={{ marginBottom: '3rem', textAlign: 'center' }} className="fade-in">
          <h2 style={{ fontSize: '2.8rem', color: '#2C3E50', letterSpacing: '-1px' }}>
            ¡Captura momentos, comparte el amor puro! 🐕🐈
          </h2>
          <p style={{ color: '#7F8C8D', fontSize: '1.2rem', fontWeight: '500', marginTop: '1rem' }}>
            Bienvenidos a la comunidad de mascotas más activa y tierna del planeta.
          </p>
        </header>

        <PetFeed posts={posts} />
      </main>

      <footer style={{ marginTop: '5rem', padding: '3rem 2rem', textAlign: 'center', color: '#BDC3C7', borderTop: '1px solid #eee' }}>
        <p style={{ fontSize: '0.9rem' }}>
          &copy; 2026 PetBook DevOps Challenge. Diseñado con ❤️ para un mundo más tierno.
        </p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Built by PetBook Engineering Team.
        </p>
      </footer>
    </div>
  );
}

export default App;
