import React from "react";
import styles from "../styles/news.module.scss";

const CategoryButtons = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => (
  <div className={styles.newsCategories}>
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => onSelectCategory(category.id)}
        className={
          selectedCategory === category.id ? styles.activeCategory : ""
        }
      >
        {category.name}
      </button>
    ))}
  </div>
);

export default CategoryButtons;
