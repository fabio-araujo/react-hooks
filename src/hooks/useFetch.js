import { useEffect, useState } from "react";

export const useFetch = (url, method = "get") => {
    console.log(url)

  const [response, setResponse] = useState({
    data: null,
    loading: true,
  });

  useEffect(
    function() {
        console.log('rodou')
      fetch(url, { method })
        .then((resp) => resp.json())
        .then((json) => setResponse({ data: json, loading: false }));
    },
    [url, method]
  )
  return response
};
