import useApi from "../hooks/useApi";

const useBannerService = () => {
  const { get, loading, error } = useApi();

  const getBanner = async () => {
    try {
      const jobs = await get("/fee177346e7875554413");
      return jobs;
    } catch (error) {
      throw error;
    }
  };

  return {
    getBanner,
    loading,
    error,
  };
};

export default useBannerService;
