import React, { useEffect, useState } from "react";
import useJobsService from "../services/useBannerService";

const Home = () => {
  const { getBanner, loading } = useJobsService();
  const [bannerData, setBannerData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBanner();
        setBannerData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBanner();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(bannerData?.slides);
  return (
    <div>
      {bannerData?.slides?.map((banner, index) => (
        <div key={index}>
          <h1>{banner.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
