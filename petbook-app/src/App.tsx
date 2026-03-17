import { useState } from 'react';
import './index.css';
import logo from './assets/logo.png';
import galleryImg from './assets/gallery.png';
import { Post } from './types';
import Navbar from './components/Navbar';
import PetFeed from './components/PetFeed';

/**
 * PetBook Main Application Container
 * Orquesta el flujo de datos y la visualización de la comunidad.
 * Diseñado bajo principios de escalabilidad y mantenibilidad "Clean Code".
 */
function App() {
  // Estado inicial de la galería - En producción esto vendría de una API
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'Mañana Dorada ☀️', author: 'Luna la Golden', imageUrl: galleryImg },
    { id: 2, title: 'Café y Patitas ☕', author: 'Oliver Twist', imageUrl: galleryImg },
    { id: 3, title: '¡Día de Playa! 🏖️', author: 'Bella Blue', imageUrl: galleryImg },
    { id: 4, title: 'Reina de la Siesta 👑', author: 'Daisy', imageUrl: galleryImg },
    { id: 5, title: 'La aventura espera 🌲', author: 'Rocky', imageUrl: galleryImg },
    { id: 6, title: 'Espejito Espejito 🪞', author: 'Coco Chanel', imageUrl: galleryImg },
  ]);
  
  const [isUploading, setIsUploading] = useState(false);

  /**
   * handleUpload
   * Simula la publicación de una nueva foto con un feedback visual premium.
   * Proyecta una experiencia de usuario (UX) fluida y profesional.
   */
  const handleUpload = () => {
    setIsUploading(true);
    
    // Latencia simulada para demostrar el estado de carga (UI Feedback)
    setTimeout(() => {
      const newPost: Post = {
        id: Date.now(),
        title: '¡Nuevo integrante detectado! 🐾',
        author: 'Comunidad PetBook',
        imageUrl: galleryImg,
      };
      
      setPosts(current => [newPost, ...current]);
      setIsUploading(false);
      
      // UX: Scroll suave al inicio para ver el nuevo contenido
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1800);
  };

  return (
    <div className="app-container">
      <Navbar 
        logo={logo} 
        onUpload={handleUpload} 
        isUploading={isUploading} 
      />

      <main>
        <header className="hero fade-in">
          <h2>¡Captura momentos, comparte el amor puro! 🐕🐈</h2>
          <p>
            Únete a la red social más tierna y activa del planeta. 
            Cuidamos la calidad en cada pixel y en cada despliegue.
          </p>
        </header>

        <section aria-label="Feed de fotos de mascotas">
          <PetFeed posts={posts} />
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">PetBook.</div>
        <div className="footer-credits">
          <p>&copy; 2026 PetBook DevOps Challenge</p>
          <p>Implementación Magistral de Ingeniería de Software</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
