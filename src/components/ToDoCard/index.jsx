import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ToDoCard = () => {
  const [results, setResults] = useState([])

  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editedItem, setEditedItem] = useState({})
  const [isCreateOpen, setIsCreateOpen] = useState(false)

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
      const item = results.find((goalItem) => goalItem._id === _id); 
      if (!item) {
        console.error('Goal not found');
        return;
      }

      console.log('line 43: handleComplete called')
      console.log('line 44 item', item)
  
      const response = await axios.patch(
        `http://localhost:3000/goals/${_id}`,
        {
          goal: item.goal,
          date: item.date,
          category: item.category,
          status: item.status,
          progressValue: 'Complete',
        }
      );

      console.log('line 57 response', response)
      console.log('line 58 item', item)
  
      if (response.status === 200) {
        setResults((prevState) =>
          prevState.map((goalItem) =>
            goalItem._id === _id ? { ...goalItem, progressValue: 'Complete' } : goalItem
          )
        );
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
  
  

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/goals/${_id}`);
      if (response.status === 204) {
        setResults((prevState) =>
          prevState.filter((item) => item._id !== _id)
        );
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


  const openEditOverlay = (item) => {
    console.log('line 68 item', item)
    setIsEditOpen(true)
    setEditedItem(item)
    // console.log('line 71 editedItem', item)
  }


  const closeEditOverlay = () => {
    setIsEditOpen(false);
    setEditedItem({});
  };


  const saveEditedItem = async () => {
    try {
      const response = await axios.patch(`http://localhost:3000/goals/${editedItem._id}`, {
        goal: editedItem.goal,
        date: editedItem.date, 
        category: editedItem.category,
        status: editedItem.status, 
        progressValue: editedItem.progressValue,
      });

      console.log('line 89 response', response)

      if (response.status === 200) {
        console.log('line 92 results', results)
        setResults((prevState) =>
          prevState.map((item) =>
            item._id === editedItem._id ? { ...item, ...editedItem } : item
          )
        );
        console.log('line 98 results', results)
        closeEditOverlay();
      }
      console.log('line 101 response', response)
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  

  return (
    <div>
      <ul>
        {results.map((item) => (
          <li
            style={{ listStyle: 'none', border: '1px black solid', backgroundColor: 'wheat' }}
            key={item._id}
          >
            <div id='content-cont'>
              <h3>{item.goal}</h3>
              <p> Date: {item.date} </p>
              <p>Category: {item.category}</p>
              <p>Progress: {item.progressValue}</p>
            </div>
            <div id='actions-cont'>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
              <button onClick={() => openEditOverlay(item)}>Edit</button>
              <button onClick={() => handleComplete(item._id)}>Complete</button>
            </div>
          </li>
        ))}
      </ul>

      {isEditOpen && (
        <div className="edit-overlay">
          <h2>Edit Goal</h2>

          <input
            type="text"
            placeholder="Goal"
            value={editedItem.goal || ''}
            onChange={(e) => setEditedItem({ ...editedItem, goal: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            value={editedItem.category || ''}
            onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
          />
          <input type="text" 
            placeholder='YYYY-MM-DD'
            value={editedItem.date || ''}
            onChange={(e) => setEditedItem({ ...editedItem, date: e.target.value })}
          />

<input type="text" 
            placeholder='status'
            value={editedItem.status || ''}
            onChange={(e) => setEditedItem({ ...editedItem, status: e.target.value })}
          />

<input type="text" 
            placeholder='progress'
            value={editedItem.progressValue || ''}
            onChange={(e) => setEditedItem({ ...editedItem, progressValue: e.target.value })}
          />


          <button onClick={saveEditedItem}>Save</button>
          <button onClick={closeEditOverlay}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default ToDoCard
