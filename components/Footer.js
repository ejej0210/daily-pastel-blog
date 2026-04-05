export default function Footer() {
  return (
    <footer style={{ padding: '6rem 0 3rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Daily Blog. Created with 🌸 & Vercel.</p>
      </div>
    </footer>
  );
}
