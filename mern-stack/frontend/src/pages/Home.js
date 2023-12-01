import React, { useEffect, useState } from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {

  const [workouts, setWorkout] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async() => {
      const response = await fetch("http://localhost:4000/api/workouts")
      const json = await response.json()
      console.log(response)

      if(response.ok) {
        setWorkout(json)
      }
    }

    fetchWorkouts()
  
  }, [])
  

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
    </div>
  )
}

export default Home