import React from "react";
import Slider from "react-slick";
import banner from "../../constants/banner.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/banner.module.scss";
import { IoCaretForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkButton from "../shared/LinkButton";

const Banner = () => {
  const sortedSlides = banner.slides.sort((a, b) => a.order - b.order);
  const { i18n } = useTranslation();
  const dir = i18n.dir();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,

    customPaging: (i) => {
      const totalSlides = sortedSlides.length;
      const numberOfStaticDots = 8;
      const staticDots = Array.from(
        { length: numberOfStaticDots },
        (_, index) => (
          <div
            key={`static-dot-${i}-${index}`}
            className="static-dot w-1 h-1 rounded-full bg-gray mx-1"
          ></div>
        )
      );
      return (
        <div className="flex items-center">
          {i > 0 && staticDots.slice(0, Math.floor(numberOfStaticDots / 2))}
          <div
            className="w-9 h-9 rounded-full mx-1 active-dot"
            style={{
              backgroundColor: `#${sortedSlides[i].colorCode}`,
            }}
          ></div>
          {i < totalSlides - 1 &&
            staticDots.slice(Math.floor(numberOfStaticDots / 2))}
        </div>
      );
    },
    dotsClass: "slick-dots",
  };

  return (
    <div className="container">
      <Slider {...settings} dir={dir} className="pb-2">
        {sortedSlides.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 gap-x-2 banner-wrapper"
          >
            <div className="lg:col-span-5 col-span-12 pt-14 pb-8">
              <span
                style={{
                  color: `#${item.colorCode}`,
                  marginBottom: "24px",
                  display: "block",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                className="uppercase"
              >
                {item.category}
              </span>
              <h1
                className={`${styles.bannerTitle} text-h1 font-bold mb-4 text-title leading-h1 line-clamp-2`}
                style={{ "--brush-color": `#${item.colorCode}` }}
              >
                {item.title}
              </h1>
              <p
                className={`${styles.bannerDescription} text-sm text-gray font-medium mb-8 line-clamp-3`}
              >
                {item.brief}
              </p>
              <div className="flex items-center gap-10 flex-wrap">
                <LinkButton variant="contained" href={item.itemUrl}>
                  Find out more
                </LinkButton>{" "}
                <Link to={item.videoUrl} className="flex items-center gap-4">
                  <div className={styles.playIcon}>
                    <IoCaretForwardOutline />
                  </div>
                  <span className="text-gray font-medium">Play Demo</span>
                </Link>
              </div>
            </div>
            <div
              className={`${styles.headerImgWrapper} lg:col-span-7 lg:block hidden`}
            >
              <div
                className={`${styles.imgOverlay}`}
                style={{
                  backgroundImage: `url(${require(`../../assets/${item.imgUrl}`)})`,
                }}
              ></div>
              <div
                className={`${styles.headerOverlay}`}
                style={{
                  backgroundImage: `url(${require(`../../assets/${item.vectorImg}`)})`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
