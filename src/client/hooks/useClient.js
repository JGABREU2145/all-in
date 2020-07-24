import { useCallback, useContext, useState, useEffect } from "react";
import ClientContext from "../contexts";

export const useClient = (url) => {
  const axiosClient = useContext(ClientContext);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const executeQuery = useCallback(async () => {
    try {
      const res = await axiosClient.get(url);
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  }, [axiosClient, url]);

  useEffect(() => {
    executeQuery();
  }, [executeQuery]);

  return { error, data, loading };
};
