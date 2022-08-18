import { useState } from 'react';
import styles from './Task.module.css';
import Plus from '../../assets/plus.svg';
import Taskcard from '../TaskCard';
import Clipboard from '../../assets/clipboard.svg';

interface Task {
    id: number;
    description: string;
    done: boolean;
}


function Task() {
 
 const [tasks, setTask] = useState<Task[]>([]);
 const [textTask, setTextTask] = useState(''); 
 
     
const handleAddTask = () => {
    let task: Task = {id: Math.random(), description: textTask, done: false};
    
    setTask(prevTask => [...prevTask, task]);
    setTextTask('');   
}

const handleRemoveTask = (idToDelete : number) => {
    const taskIndex = tasks.findIndex((task) => {
        return task.id == idToDelete;
    });
  
  
    const newTasks = tasks.filter((task) => task.id !== idToDelete);
    setTask(newTasks);   
}


const handleCompleteTask = (idTocomplete) => {
   
    const taskIndex = tasks.findIndex((task) => {
        return task.id == idTocomplete;
  });
  
  
  const tempTasks = [...tasks];
    
  tempTasks[taskIndex].done = !tempTasks[taskIndex].done;
  
  setTask(tempTasks);
}



 return(
    <>
        {/* New tasks */}
        <div className={styles.container}>
            <input type="text" value={textTask}  onChange={(e) => {setTextTask(e.target.value)}}  placeholder='Adicione uma nova tarefa'/>
            <button onClick={handleAddTask}>Criar <img className={styles.plus} src={Plus}/></button>
        </div>

        {/* Task Info */}  
        <div className={styles.container}>
            <p className={styles.created}>Tarefas Criadas <span className={styles.createdCounter}>{tasks.length}</span></p>
            <p className={styles.done}>Concluídas <span  className={styles.doneCounter}>{tasks.filter(task => task.done === true).length} de {tasks.length}</span></p>
        </div>

        {/* TaskList */}
        {
            tasks.length === 0 ? 
        <>
                <div className={styles.containerList}>
                <img src={Clipboard}/>
                <h3>Você ainda não tem tarefas cadastradas</h3>
                <p>Crie tarefas e organize seus itens a fazer</p> 
            </div>
           </>       
           
        :
        tasks.map(tsk => {
            return(<Taskcard key={tsk.id} tasks={tsk} removeTask={handleRemoveTask}  completeTask={handleCompleteTask}/>)
        })
      
        }
    </>
 )
}


export default Task;