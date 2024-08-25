import React from "react";
import useFetchNews from "../hooks/useFetchNews";
import styles from "../styles/news.module.scss";
import NewsCard from "../components/cards/NewsCard";
import Loader from "../components/shared/loader";
import CategoryButtons from "../components/CategoryButtons";

const News = () => {
  const {
    categories,
    filteredNews,
    selectedCategory,
    setSelectedCategory,
    loading,
    error,
  } = useFetchNews();

  if (error) return <p>Error loading news</p>;

  return (
    <div className="container py-10">
      <h2 className={styles.newsTitle}>All News</h2>
      {loading ? (
        <Loader customSize={60} />
      ) : (
        <>
          <CategoryButtons
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredNews &&
              filteredNews.map((newsItem) => (
                <NewsCard
                  key={newsItem.id}
                  newsItem={newsItem}
                  categories={categories}
                  selectedCategory={selectedCategory}
                />
              ))}
          </div>
        </>
      )}
      {filteredNews.length === 0 && !loading && (
        <div className={styles.noNewsMessage}>No news available</div>
      )}
    </div>
  );
};

export default News;
