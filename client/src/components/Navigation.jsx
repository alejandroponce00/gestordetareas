 import {Link} from 'react-router-dom'
 
 export function Navigation() {
   return ( 
     <div>
        <Link to="/tasks">
        <h1>Gestor de Tareas</h1>
        </Link>
        <Link to="/tasks-create"><h2>Crear Tarea</h2></Link>
        </div>
   )
 }
 
  