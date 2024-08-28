import { useEffect, useState } from "react";
import { supabase } from "./client";

const usePostDetail = (post_id = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      let query = supabase
        .from("posts")
        .select(
          `
              *
          `
        )
        .eq("post_id", post_id);

      //   // Apply title filter if provided
      //   if (title) {
      //     query = query.eq("detail.title", title);
      //   }

      try {
        const { data, error } = await query;

        if (isMounted) {
          if (error) {
            setError(error.message);
          } else {
            setData(data);
          }
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []); // Add title to the dependency array to refetch when it changes

  return { data, loading, error };
};

export default usePostDetail;
