import { useState } from "react";
import api from "../configs/api";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (config) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api(config);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const get = (url, config = {}) => request({ ...config, url, method: "GET" });
  const post = (url, data, config = {}) =>
    request({ ...config, url, method: "POST", data });
  const put = (url, data, config = {}) =>
    request({ ...config, url, method: "PUT", data });
  const del = (url, config = {}) =>
    request({ ...config, url, method: "DELETE" });

  return { get, post, put, del, loading, error };
};

export default useApi;
