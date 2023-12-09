import {useNavigate} from 'react-router-dom'

export function TaskCard({task}) {
  const navigate = useNavigate()

  return (
    <div className='card'
    
    onClick={() =>{
      navigate('/tasks/'+ task.id)

    }}
    >
        <h3>{task.title}</h3>
        <h4>{task.description}</h4>
        <hr/>
        </div>
  )
}

