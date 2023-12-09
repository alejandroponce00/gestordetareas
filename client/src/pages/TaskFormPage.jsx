import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { createTask,deleteTask,updateTask,getTask } from '../api/tasks.api'
import { useNavigate,useParams } from 'react-router'
import{toast} from 'react-hot-toast'

export  function TaskFormPage() {
const {register,handleSubmit, formState:{
  errors
},setValue} = useForm();
const navigate = useNavigate()
const params = useParams()


const onSubmit = handleSubmit(async (data) => {
 if (params.id){
  await updateTask(params.id, data)
  toast.success('Tarea actualizada!',{
  
    style:{

      background:"#C0C0C0",
      color:"gray"
   }})
  
 } else{
  await createTask(data);
  toast.success('Tarea creada!',{
  
  style:{
    background:"#C0C0C0",
    color:"gray"
 }})
 }
 navigate("/tasks")
})
 
useEffect(()=>{
  async function loadTask(){
  if(params.id){
    const res = await getTask(params.id);
    setValue('title', res.data.title)
    setValue('description', res.data.description)
  }
}
  loadTask();
},[]);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text"placeholder="Titulo"
        {...register("title", {required: true})}className='formulario'
        />
        {errors.title && <span>este campo es requerido</span>}
        <textarea rows="3" placeholder="Descripcion"
                {...register("description", {required: true})}className='formulario'

        ></textarea >
         {errors.description && <span>este campo es requerido</span>}
        <button>Guardar</button>
      </form>
    
      {params.id && (
      <button
       onClick={async () => {
        const accepted = window.confirm("estas seguro?");
        if(accepted){
          await deleteTask(params.id);
          toast.success('Tarea eliminada!',{
  
            style:{
              background:"#C0C0C0",
              color:"gray"
           },});
          
         
          navigate("/tasks");
        }
      }}
      >
        Borrar</button>)}
    </div>
  );
}
 
