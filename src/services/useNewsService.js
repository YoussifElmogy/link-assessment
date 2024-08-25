import useApi from "../hooks/useApi";

const useNewsService = () => {
  const { get, loading, error } = useApi();

  const getCategories = async () => {
    try {
      const categories = await get("/91298d970c27e9a06518");
      return categories;
    } catch (error) {
      throw error;
    }
  };

  const getNews = async () => {
    try {
      const news = await get("/d275425a434e02acf2f7");
      return news;
    } catch (error) {
      throw error;
    }
  };
  const getNewsById = async (id) => {
    try {
      const jobs = await get(`/d275425a434e02acf2f7/News/${id}`);
      return jobs;
    } catch (error) {
      throw error;
    }
  };

  return {
    getCategories,
    getNews,
    getNewsById,
    loading,
    error,
  };
};

export default useNewsService;
