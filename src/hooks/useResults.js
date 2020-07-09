import { useEffect, useState } from 'react'
import yelp from '../api/Yelp'


export default () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState("");

    const searchApi = async (searchTerm) => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "san jose",
          },
        });
        setResult(response.data.businesses);
      } catch (error) {
        setError("Something goes wrong");
      }
    };

    useEffect(() => {
      searchApi("meat");
    }, []);

    return [searchApi, result, error]
}