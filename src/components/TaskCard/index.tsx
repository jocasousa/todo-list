import styles from './TaskCard.module.css';
import Trash from '../../assets/trash.svg';

interface Task {
    description: string;
    done: boolean;
}

function TaskCard ({ tasks, removeTask, completeTask } : Task) {

   const deleteTask = () => {
    removeTask(tasks.id);
   }
    
   const doneTask = () => {
    completeTask(tasks.id);
   }

    return(
     <div className={styles.taskBox}>
        
        <input  onClick={doneTask}  type="checkbox" />
        <span>{tasks.description}</span>
        <img src={Trash}  onClick={deleteTask} alt="" />
      
     </div>       
     )
}


export default TaskCard;