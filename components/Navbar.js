// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" alt="KEB Shop Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Navigation links in center */}
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Search bar on right */}
      <div className="search-container">
        <SearchBar />
      </div>
    </nav>
  );
}
