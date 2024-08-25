import React from "react";
import useFetchNews from "../../hooks/useFetchNews";
import styles from "../../styles/news.module.scss";
import LinkButton from "../shared/LinkButton";
import CategoryButtons from "../CategoryButtons";
import NewsCard from "../cards/NewsCard";
import Loader from "../shared/loader";

const NewsSection = () => {
  const {
    categories,
    filteredNews,
    selectedCategory,
    setSelectedCategory,
    loading,
    error,
  } = useFetchNews("all", 6);

  if (error) return <p>Error loading news</p>;

  return (
    <div className={styles.newsSection}>
      <div className="container">
        <span className="text-gray font-semibold text-center mb-3 block">
          Media
        </span>
        <h2 className={styles.newsTitle}>Top News</h2>
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
                    fromHomePage
                  />
                ))}
            </div>
          </>
        )}
        {filteredNews.length > 0 && (
          <div className={`flex justify-center mt-12 ${styles.newsBtn}`}>
            <LinkButton variant="contained" href="/news">
              View All News
            </LinkButton>
          </div>
        )}
        {filteredNews.length === 0 && !loading && (
          <div className={styles.noNewsMessage}>No news available</div>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
