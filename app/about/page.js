export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 1rem' }}>
      <section className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--primary)', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
          🌸
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>이은지</h1>
        <p style={{ color: 'var(--text-light)', fontWeight: '600', marginBottom: '1.5rem' }}>학번: 20263234</p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
          안녕하세요! 소소한 행복을 기록하는 블로거입니다. 
          따뜻한 봄 햇살 아래서 마시는 커피, 
          포근한 이불 속에서 읽는 책 한 권, 
          그리고 길가에 핀 이름 모를 꽃들을 사랑합니다.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="btn" style={{ background: 'var(--secondary)' }}>#일상기록</span>
          <span className="btn" style={{ background: 'var(--accent)' }}>#파스텔감성</span>
          <span className="btn" style={{ background: 'var(--primary)' }}>#행복찾기</span>
        </div>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>My Philosophy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="glass-card">
            <h3>Slow Life</h3>
            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>바쁜 세상 속에서도 나만의 속도를 잃지 않으려 노력합니다.</p>
          </div>
          <div className="glass-card">
            <h3>Small Joy</h3>
            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>작은 기쁨이 모여 큰 행복을 만든다고 믿어요.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
