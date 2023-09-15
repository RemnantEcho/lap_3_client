import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import { useSelector } from 'react-redux'

const ToDoCard = () => {
  const { bgColor, spacing, lineSpacing, size } = useSelector((state) => state.accessibility)
  const [results, setResults] = useState([])

  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editedItem, setEditedItem] = useState({})

  const [showAddOverlay, setShowAddOverlay] = useState(false)
  const [goal, setGoal] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState(0)
  const [progressValue, setProgressValue] = useState('Incomplete')

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
    setIsEditOpen(false)
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
        setIsEditOpen(false)
      }
      console.log('line 101 response', response)
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleShowOverlay = () => {
    setShowAddOverlay(true)
  }

  const handleHideOverlay = () => {
    setShowAddOverlay(false)
    setGoal('')
    setCategory('')
    setDate('')
  }

  const handleAddNew = async () => {
    try {
      const response = await axios.post('http://localhost:3000/goals', {
        goal: goal,
        category: category,
        date: date,
        status: status,
        progressValue: progressValue,
      });
      if (response.status === 201) {
        const newTask = {
          goal: goal, 
          category: category,
          date: date, 
          status: status,
          progressValue: progressValue,
          _id: response.data._id
        }
  

        if (newTask && Object.keys(newTask).length > 0) {

          setResults((prevResults) => [...prevResults, newTask]);
          handleHideOverlay();
        } else {
          console.error('Invalid new task data in the API response.');
        }
      }
    } catch (error) {
      console.error('Error adding new task:', error);
    }
  };
  


  return (
    <div>
      <div id='cards-cont'>
        <ul>
          {results.map((item) => (
            <li id='content'
              style={{ listStyle: 'none' }}
              key={item._id}
            >
              <div id='content-cont' style={{bgColor, spacing, lineSpacing, size}}>
                <h3 id='goal'>{item.goal}</h3>
                <p id='text'> Date: {item.date} </p>
                <p id='text'>Category: {item.category}</p>
                <p id='text'>Progress: <strong>{item.progressValue}</strong></p>
              </div>
              <div id='actions-cont'>
                <button id='action-btn' onClick={() => handleDelete(item._id)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                <button id='action-btn' onClick={() => openEditOverlay(item)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button id='action-btn' onClick={() => handleComplete(item._id)}><i className="fa fa-check" aria-hidden="true"></i></button>
              </div>
            </li>
          ))}
        </ul>
        <div id='overlay' style={{ display: isEditOpen ? 'block' : 'none' }}>
          {/* <div id='edit-overlay-content'> */}
          {isEditOpen && (
            <div id='edit-overlay-content'>
              <h2 style={{textAlign: 'center'}}>EDIT</h2>
              <div id='input-container'>
                <input id='edit-input'
                type="text"
                placeholder="Goal"
                value={editedItem.goal || ''}
                onChange={(e) => setEditedItem({ ...editedItem, goal: e.target.value })}
              />
              <input id='edit-input'
                type="text"
                placeholder="Category"
                value={editedItem.category || ''}
                onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
              />
              <input id='edit-input'
                type="text"
                placeholder='YYYY-MM-DD'
                value={editedItem.date || ''}
                onChange={(e) => setEditedItem({ ...editedItem, date: e.target.value })}
              />

              {/* <input type="text"
                placeholder='status'
                value={editedItem.status || ''}
                onChange={(e) => setEditedItem({ ...editedItem, status: e.target.value })}
              /> 

              <input type="text"
                placeholder='progress'
                value={editedItem.progressValue || ''}
                onChange={(e) => setEditedItem({ ...editedItem, progressValue: e.target.value })}
              /> */}
              </div>
              <div id='buttons-cont'>
                <button id='overlay-btn' onClick={saveEditedItem}>Save</button>
                <button id='overlay-btn' onClick={closeEditOverlay}>Cancel</button>
              </div>              
            </div>
          )}
          {/* </div> */}
        </div>
        
      </div>
      <div id='new-btn-cont'>
        <button id='new-btn' onClick={handleShowOverlay}>ADD TASK</button>
      </div>
      

      <div id='add-overlay' style={{ display: showAddOverlay ? 'block' : 'none' }}>
        {showAddOverlay && (
          <div id="add-overlay-content">
            <h2 style={{textAlign: 'center'}}>ADD TASK</h2>
          
            <div id='input-container'>
              <input id='edit-input'
                type="text"
                placeholder="Goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
              <input id='edit-input'
                type="text" 
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <input id='edit-input'
                type="text"
                placeholder='YYYY-MM-DD'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              {/* <input
                type="text"
                placeholder='Status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />

              <input
                type="text"
                placeholder='Progress'
                value={progressValue}
                onChange={(e) => setProgressValue(e.target.value)}
              /> */}
            </div>

            

            <div id='buttons-cont'>
              <button id='overlay-btn' onClick={handleAddNew}>Add</button>
              <button id='overlay-btn' onClick={handleHideOverlay}>Cancel</button>
            </div>
            
          </div>
        )}
      </div>
      
    </div>
  );
}

export default ToDoCard
