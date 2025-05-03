// components/Navbar.js
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <SearchBar />
    </nav>
  );
}
