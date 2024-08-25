import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNewsService from "../services/useNewsService";
import Loader from "../components/shared/loader";
import styles from "../styles/news.module.scss";
import { formatDate } from "../components/helpers/formateDate";
import { FaRegCalendarAlt } from "react-icons/fa";

const SingleNews = () => {
  const { id: newsId } = useParams();
  const { getNewsById, loading } = useNewsService();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await getNewsById(newsId);
        setNews(newsData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, [newsId]);

  if (loading) {
    <Loader customSize={60} suspense />;
  }
  return (
    <div className="container py-10">
      {news && (
        <>
          {news?.publishedDate && (
            <span className={styles.newsDate}>
              <FaRegCalendarAlt />
              {formatDate(news?.publishedDate)}
            </span>
          )}
          <h1 className="text-h2 text-gray font-medium">{news.title}</h1>
          <img src={news.urlToImage} alt={news.title} />
        </>
      )}
    </div>
  );
};

export default SingleNews;
