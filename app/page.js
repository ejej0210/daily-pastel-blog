import Link from 'next/link';

const posts = [
  { id: 1, title: '봄기운 가득한 카페 나들이 🌸', date: '2026.04.05', excerpt: '따사로운 햇살을 받으며 커피 한 잔의 여유를 즐겼던 오늘 하루를 기록합니다.' },
  { id: 2, title: '새로 장만한 몽글몽글한 소품들 ☁️', date: '2026.04.03', excerpt: '일상을 더 포근하게 만들어줄 소중한 아이템들을 소개해요.' },
  { id: 3, title: '오늘 먹은 달콤한 디저트 🍰', date: '2026.04.01', excerpt: '입안 가득 행복이 퍼지는 달콤한 순간을 나누고 싶어요.' },
];

export default function Home() {
  return (
    <div>
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Welcome to my Daily Memory</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
          소소하지만 확실한 행복을 찾아가는 저의 일상을 기록하는 공간입니다. 
          파스텔톤 꿈을 담아 전해드려요.
        </p>
      </section>

      <section style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Latest Stories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {posts.map((post) => (
            <div key={post.id} className="glass-card">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>{post.date}</span>
              <h3 style={{ marginTop: '0.5rem' }}>{post.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', margin: '1rem 0' }}>{post.excerpt}</p>
              <Link href={`/post/${post.id}`} className="btn">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
