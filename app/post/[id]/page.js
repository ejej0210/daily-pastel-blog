import Link from 'next/link';

const postData = {
  1: {
    title: '봄기운 가득한 카페 나들이 🌸',
    date: '2026.04.05',
    content: `
      오늘 방문한 카페는 분홍빛 벚꽃이 한눈에 보이는 멋진 곳이었어요. 
      창가 자리에 앉아 따뜻한 라떼를 한 모금 마시니 쌓였던 피로가 사르르 녹아내리는 기분이었습니다. 
      연한 분홍색과 화이트 톤의 인테리어가 정말 마음에 들었어요. 
      이렇게 예쁜 공간에서 책을 읽고 글을 쓰는 시간은 저에게 가장 큰 힐링이 됩니다. 
      내일도 이런 평화로운 순간이 찾아오길 바라며 오늘의 기록을 마칩니다.
    `,
    category: '#일상 #카페탐방'
  },
  2: {
    title: '새로 장만한 몽글몽글한 소품들 ☁️',
    date: '2026.04.03',
    content: `
      방 분위기를 조금 더 아늑하게 바꿔보고 싶어서 파스텔톤의 소품들을 몇 가지 데려왔어요. 
      민트색 미니 스탠드와 보들보들한 연보라색 담요를 보니 마음까지 몽글몽글해지네요. 
      작은 변화만으로도 일상이 훨씬 풍요로워지는 걸 느껴요. 
      나만의 공간을 좋아하는 것들로 채우는 일은 언제나 즐겁습니다.
    `,
    category: '#인테리어 #소품샵'
  },
  3: {
    title: '오늘 먹은 달콤한 디저트 🍰',
    date: '2026.04.01',
    content: `
      스트레스를 받을 때는 역시 달콤한 게 최고죠! 
      오늘 먹은 레몬 케이크는 적당히 상큼하면서도 달달해서 먹자마자 기분이 좋아졌어요. 
      부드러운 크림이 입안에서 녹는 그 순간이 너무 행복했습니다. 
      맛있는 음식을 사랑하는 사람과 함께 나눌 수 있다는 건 참 감사한 일이에요.
    `,
    category: '#맛집 #디저트'
  }
};

export default async function PostPage(props) {
  const params = await props.params;
  const post = postData[params.id] || postData[1];

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto' }}>
      <article className="glass-card" style={{ padding: '4rem', minHeight: '600px' }}>
        <Link href="/" style={{ marginBottom: '2rem', display: 'inline-block', color: 'var(--text-light)', fontWeight: '600' }}>
          ← Back to Home
        </Link>
        <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>{post.date}</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.2' }}>{post.title}</h1>
        <div style={{ fontSize: '1.2rem', color: 'var(--text)', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>
        <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem', color: 'var(--text-light)', fontSize: '1rem' }}>
          {post.category}
        </div>
      </article>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link href="/" className="btn" style={{ background: 'var(--primary)' }}>
          다른 이야기 보러 가기
        </Link>
      </div>
    </div>
  );
}
