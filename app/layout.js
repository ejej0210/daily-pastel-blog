import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Daily Blog | 소소한 일상 이야기',
  description: '파스텔톤으로 채워가는 저의 소중한 일상 블로그입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main className="container page-enter">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
