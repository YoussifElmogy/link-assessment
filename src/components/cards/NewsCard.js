import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../../styles/news.module.scss";
import placeHolder from "../../assets/photo-placeholder.png";
import { formatDate } from "../helpers/formateDate";

const NewsCard = ({ newsItem, categories, selectedCategory, fromHomePage }) => {
  return (
    <div key={newsItem.id} className={styles.newsCard}>
      <div className={styles.newsImgWrapper}>
        <img
          src={newsItem.urlToImage ? newsItem.urlToImage : placeHolder}
          alt={newsItem.title}
        />
      </div>
      <div className={styles.newsContent}>
        <Link
          to={fromHomePage ? `news/${newsItem.id - 1}` : `${newsItem.id - 1}`}
        >
          {" "}
          <h3 className={`${styles.newsItemTitle} line-clamp-3`}>
            {newsItem.title}
          </h3>
        </Link>

        <span className={styles.newsDate}>
          <FaRegCalendarAlt />
          {formatDate(newsItem.publishedDate)}
        </span>
        <div className="flex justify-between items-center min-h-9">
          {selectedCategory === "all" ? (
            <span className={styles.newsCategoryName}>
              {
                categories.find(
                  (cat) => parseInt(cat.id) === parseInt(newsItem.categoryID)
                )?.name
              }
            </span>
          ) : (
            <span></span>
          )}
          <div className={styles.cardIcons}>
            <MdFavoriteBorder />
            <IoShareSocialSharp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
