import React, { useState, useEffect } from 'react'
import axios from 'axios'

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


  return (
    <div>
      <ul>
        {results.map((item) => (
          <li key={item._id}>
            Goal: {item.goal}, Category: {item.category}, Status: {item.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoCard
