import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../../App.css'
const Home  = ()=>{
 
  const [dat, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState();
  const [array, setArray] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://api.aniapi.com/v1/anime/')
      .then((res) => setData(res.data.data.documents))
      .catch((err) => {
        console.log('err', err);
      });
  },[])
  

  useEffect(() => {
    const arr = dat.filter((val) => {
        if (setSearchTerm === '') {
          return val;
        } else if (val.descriptions.en == searchTerm) {
          return val;
        }
      });

      setArray(arr);
  })

  console.log('data api', array);

  return (
    <div>
      <div className='home'>
        <input
          type='text'
          placeholder='Enter Title  or Genres'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div style={{ margin: '0 10px', border: '1px solid black', textAlign: 'center' }}>
        <table>
          <thead>
            <tr>
              <th>Anime Name</th>
              <th>Trailer Url</th>
              <th>Genres</th>
              <th>Descriptions</th>
              <th>Season Year</th>
              <th>Episodes Count</th>
            </tr>
          </thead>
          <tbody>
            {dat.map((value) => {
              return (
                <tr key={value.anilist_id}>
                  <td>{value.titles.en}</td>
                  <td>{value.trailer_url}</td>
                  <td>
                    {value.genres.map((val) => {
                      return <span>{val} </span>;
                    })}
                  </td>
                  <td>{value.descriptions.en}</td>
                  <td>{value.season_year}</td>
                  <td>{value.episodes_count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
  }
export default Home


