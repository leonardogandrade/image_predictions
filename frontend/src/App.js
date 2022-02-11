
import React, { useEffect, useState } from 'react'
import backend from './services/backend';
import './App.css';
const imgPath = 'http://localhost:3001/upload/dog.jpeg';

function name_() {
  alert('hello')
}

function App() {
  const [data, getData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await backend.get('/object-detection')
      getData(fetchedData.data);
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <div className='image-div'>
        <img src={imgPath} alt="logo" />
        {
          data.map(data => (
            <div key={data.score}>
              <p
                style={{
                  left: data.bbox[0],
                  top: data.bbox[1],
                  width: data.bbox[2],
                  height: data.bbox[3],
                  background: '#0aabba',
                  fontWeight: 'bold',
                  opacity: 0.4,
                }}>
                {data.class}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
