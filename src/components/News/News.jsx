import React, { useState, useEffect } from 'react';

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const apiKey = process.env.REACT_APP_NEWS_API_KEY;
                console.log('API Key:', apiKey); // 환경 변수 확인
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`);
                const data = await response.json();
                console.log('Fetched news data:', data); // 데이터 확인
                if (data.articles) {
                    setArticles(data.articles.slice(0, 6)); // 상위 6개 기사만 선택
                } else {
                    console.error('Error: No articles found in the response');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        
        fetchNews();
    }, []);

    return (
        <div className="news-container">
            <h2>최신 뉴스</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index} className="news-item">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
                            <div className="news-content">
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
