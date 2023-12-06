import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async() => {
    const response = await fetch("http://localhost:4000/api/workouts/" + workout._id, {
      method: 'DELETE',
    })

    const json = await response.json()

    if(response.ok) {
      console.log("deleted succesfully", json)
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Sets : </strong>{workout.sets}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <div className="icons">
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
          {/* <span class="material-symbols-outlined">edit</span> */}
        </div>
    </div>
  )
}

export default WorkoutDetails