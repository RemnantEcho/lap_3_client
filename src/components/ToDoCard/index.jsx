import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ToDoCard = () => {
  const [results, setResults] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/goals')
        if (response.status === 200) {
          const responseData = response.data
          const data = responseData.goal
          if (Array.isArray(data)) {
            setResults(data)
          } else {
            console.error('Data is not an array')
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()

  }, [])


  const handleComplete = async (_id) => {
    try {
      const response = await axios.patch(`http://localhost:3000/goals/${_id}`, {
        progressValue: 'Complete',
      });
  
      if (response.status === 200) {
        setResults((prevState) =>
          prevState.map((item) =>
            item._id === _id ? { ...item, progressValue: 'Complete' } : item
          )
        );
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <ul>
        {results.map((item) => (
          <li style={{ listStyle: 'none', border:'1px black solid', backgroundColor:'wheat' }} key={item._id}>
            <div id='content-cont'>
              <h3>{item.goal}</h3>
              <p> Date: {item.date} </p>
              <p>Category: {item.category}</p>
              <p>Progress: {item.progressValue}</p>
            </div>
            <div id='actions-cont'>
              <button>Delete</button>
              <button>Edit </button>
              <button onClick={() => handleComplete(item._id)}>Complete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoCard
