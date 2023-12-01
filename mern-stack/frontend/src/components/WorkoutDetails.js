import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {

  const handleClick = async() => {
    const response = await fetch("http://localhost:4000/api/workouts/" + workout._id, {
      method: 'DELETE',
    })

    const json = await response.json()

    if(response.ok) {
      console.log("deleted succesfully", json)
    }
  }

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Sets : </strong>{workout.sets}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetails