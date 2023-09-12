import React from 'react';

export default function AccountPage() {
  return (
    <div className='account-page' style={{display:'flex', flexDirection:'column'}}>
    <h3> Name: </h3>
    <p> Fetched name </p>
    <h3> Surname: </h3>
    <p> Fetched surname </p>
    <h3> username: </h3>
    <p> Fetched username </p>
    <h3> email: </h3>
    <p> Fetched email </p>
    <button>Edit details</button>
    <h3> Change password </h3>
    <form>
      <input type="text" name="old password" id="old password" placeholder='Old password' />
      <input type="text" name="New password" id="New password" placeholder='New password' />
      <button>Change</button>
    </form>
    </div>
  )
}
