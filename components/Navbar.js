import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo">
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-1px' }}>
          Daily<span>.</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}
