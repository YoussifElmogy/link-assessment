import React from "react";
import styles from "../../styles/thingsWeDo.module.scss";
import thingsWeDoData from "../../constants/thingsWeDo.json";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ThingsWeDo = () => {
  const importImage = (imageName) => {
    try {
      return require(`../../assets/${imageName}`);
    } catch (error) {
      console.error(`Failed to load image: ${imageName}`, error);
      return null;
    }
  };

  return (
    <div className={styles.thingWeDoSection}>
      <span className={styles.thingsTitle}>Things We Do</span>
      <div className="xl:grid grid-cols-12 flex flex-col-reverse">
        <div className="xl:col-span-7 col-span-12 ">
          <div
            className={`md:grid xl:grid-rows-5 lg:grid-rows-2 md:grid-cols-3 grid-cols-1 block ${styles.thingsWeDoContent} `}
          >
            {thingsWeDoData.items.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "xl:col-start-1 xl:row-start-3 xl:row-span-2 lg:row-start-1 "
                    : index === 1
                    ? "col-start-2 xl:row-start-2 xl:row-span-2 lg:row-start-1 lg:row-span-1"
                    : index === 2
                    ? "xl:col-start-2 xl:row-start-4 xl:row-span-2 lg:col-start-1 lg:row-start-2 lg:row-span-1"
                    : index === 3
                    ? "col-start-3 row-start-1 xl:row-span-2 lg:row-span-1"
                    : "xl:col-start-3 xl:row-start-3 xl:row-span-2 lg:col-start-2 lg:row-start-2 lg:row-span-1"
                } z-10`}
              >
                <Link to={item.readMoreUrl}>
                  <div className={styles.thingsImgWrapper}>
                    <img src={importImage(item.image)} alt={item.itemTitle} />
                    <div className={styles.thingsItemTitle}>
                      <h3>{item.itemTitle}</h3>
                    </div>
                    <div className={styles.readMoreWrapper}>
                      <div>
                        <IoIosArrowRoundForward />
                        <span>Read More</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:col-span-5 col-span-12 flex items-center">
          <div className={`${styles.contentWrapper} `}>
            <h2 className={styles.thingsMainTitle}>{thingsWeDoData.title}</h2>
            <p className={styles.thingsBrief}>{thingsWeDoData.brief}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsWeDo;
