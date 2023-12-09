import {useNavigate} from 'react-router-dom'

export function TaskCard({task}) {
  const navigate = useNavigate()

  return (
    <div style={{background: "white"}}
    
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

