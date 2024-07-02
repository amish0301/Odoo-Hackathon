import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config/config.js";

const useXAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL: `${config.serverUri}`,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Abort controller to cancel the request or api call
  let controller = new AbortController();

  useEffect(() => {
    return () => {
      controller?.abort();
    };
  }, []);

  const fetchData = async ({ url, method, data = {}, params = {} }) => {
    setLoading(true);
    controller.abort();
    controller = new AbortController();

    try {
      const response = await axiosInstance({
        url,
        method,
        data,
        params,
        signal: controller.signal,
      })
      setResponse(response.data);
    } catch (err) {
        if(axios.isCancel(err)) console.error("Reqeust cancelled", err.message);
        else setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useXAxios;
