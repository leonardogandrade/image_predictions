
import React, { useEffect, useState } from 'react'
import backend from '../../services/backend';
import './style.css';

function Bbox(props) {
    const { filename } = props.match.params;
    const [data, getData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await backend.get(`/object-detection/${filename}`)
            getData(fetchedData.data);
        }
        fetchData();
    }, [filename])

    return (
        <div id="App">
            <div id='image-div'>
                <img src={`${process.env.REACT_APP_STORE}/${filename}`} alt="logo" />
                {
                    data.map(data => (
                        <p key={data.score}
                            style={{
                                left: data.bbox[0],
                                top: data.bbox[1],
                                width: data.bbox[2],
                                height: data.bbox[3],
                                background: '#0aabba',
                                fontWeight: 'bold',
                                opacity: 0.4,
                            }}>
                            <span id='headerBox'>
                                {data.class[0].toUpperCase() + data.class.substring(1,)}
                            </span>
                        </p>
                    ))
                }
            </div>
        </div>
    );
}

export default Bbox;
