
import React, { useState, useEffect } from 'react';
import axios from 'axios'




function Blog({ posts }) {
    const [data, setData] = useState({ posts: [] });
    useEffect(async () => {
        const fetchData = async () => {
            const result = await axios(
                'https://localhost:5001/weatherforecast',
            );
       
            setData(result.data);
          };
       
          fetchData();
        
    }, []);

    console.log(data)

    return (
      <ul>
        {data && data.map((post) => (
          <li>{data.date}</li>
        ))}
      </ul>
    )
  }
  
  export default Blog