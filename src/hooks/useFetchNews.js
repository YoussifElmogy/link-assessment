import { useEffect, useState } from "react";
import useNewsService from "../services/useNewsService";

const useFetchNews = (initialCategory = "all", limit) => {
  const { getCategories, getNews, loading, error } = useNewsService();
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        const extractedCategories = categoriesData.newsCategory || [];
        setCategories([
          { id: "all", name: "All News" },
          ...extractedCategories,
        ]);

        const newsData = await getNews();
        let extractedNews = newsData.News || [];
        extractedNews = extractedNews.sort(
          (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
        );
        setNews(extractedNews);
        setFilteredNews(limit ? extractedNews.slice(0, limit) : extractedNews);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, [limit]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredNews(limit ? news.slice(0, limit) : news);
    } else {
      const filtered = news.filter(
        (n) => parseInt(n.categoryID) === parseInt(selectedCategory)
      );
      setFilteredNews(limit ? filtered.slice(0, limit) : filtered);
    }
  }, [selectedCategory, news, limit]);

  return {
    categories,
    filteredNews,
    selectedCategory,
    setSelectedCategory,
    loading,
    error,
  };
};

export default useFetchNews;
