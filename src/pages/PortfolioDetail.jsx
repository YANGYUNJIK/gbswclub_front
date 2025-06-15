import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './styles/PortfolioDetail.css';
import PortfolioData from '../data/PortfolioData.jsx';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PortfolioDetail = () => {
    const { id } = useParams();
    const portfolio = PortfolioData.find((item) => item.id === parseInt(id));

    if (!portfolio) {
        return <div className="portfolio-detail">해당 포트폴리오를 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <Header />
            <div className="portfolioDetail-container"> 
            <aside className="sidebar">
                <div className="profile-box">
                    <div className="profile-img"/>
                    <p><strong>이름:</strong> {portfolio.name}</p>
                    <p><strong>학년:</strong> {portfolio.grade}</p>
                    <p><strong>학과:</strong> {portfolio.classname}</p>
                    <hr />
                    <p>한줄 자기소개</p>
                    <hr />
                    <div className="link-list">
                        <p><span className="label">📁 Github</span><br /><span>{portfolio.github}</span></p>
                        <p><span className="label">✉️ Email</span><br /><span>{portfolio.email}</span></p>
                    </div>
                </div>
            </aside>
                <main className="portfolio-content">
                    <div className="markdown-editor">
                        <div className="markdown-preview">
                            <ReactMarkdown>{portfolio.markdown}</ReactMarkdown>
                        </div>
                    </div>
                </main>
            </div>
                <Footer />
        </div>
    );
};

export default PortfolioDetail;
