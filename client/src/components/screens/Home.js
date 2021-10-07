import React,{useState,useEffect} from 'react'
import axios from 'axios';

import '../../App.css'
const Home  = ()=>{
    //https://api.aniapi.com/v1/anime     https://api..com/v1/user_story
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [array, setArray] = useState([]);
 

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  })

  let arr = data.filter(value => {
    if (value.title.toLowerCase() == searchTerm.toLowerCase()) {
      return value;
    } else if (searchTerm == "") {
      return value;
    }
    setArray(arr);

    return (
      <div className='home'>
        <input type="text" placeholder="Enter SearchTerm" onChange={(e) => setSearchTerm(e.target.value)} />
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>URl</th>
                <th>ThumbnailUrl</th>

              </tr>
            </thead>
            <tbody>
              {array.map(value => {
                return (<tr>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.url}</td>
                  <td>{value.thumbnailUrl}</td>
                </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>

      </div>
    );
  }
export default Home