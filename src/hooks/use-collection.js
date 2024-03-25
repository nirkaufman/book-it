import {useEffect, useState} from "react";


export function useCollection(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/${path}`)
        .then(response => response.json())
        .then(json => setData(json))
        .finally(() => setLoading(false));
  }, [path])

  return [data, loading];

}
