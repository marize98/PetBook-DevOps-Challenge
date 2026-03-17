import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('PetBook App', () => {
  it('renders PetBook branding', () => {
    render(<App />);
    const elements = screen.getAllByText(/PetBook/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('renders the initial gallery of posts', () => {
    render(<App />);
    const posts = screen.getAllByRole('heading', { level: 3 });
    expect(posts.length).toBeGreaterThan(0);
  });

  it('shows uploading state when clicking the button', () => {
    render(<App />);
    const uploadBtn = screen.getByText(/Publicar Foto/i);
    fireEvent.click(uploadBtn);
    expect(screen.getByText(/Uploading.../i)).toBeDefined();
  });
});
