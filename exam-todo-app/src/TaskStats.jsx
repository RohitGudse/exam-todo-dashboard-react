const TaskStats = ({tasks })=>{
    const completed = tasks.filter(tasks => task.completed).length;


    return (
        <div className= "card">
          <h3>Task statistics</h3>
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed: {completed}</p>
          <p>Pending: {tasks.length - completed}</p>
        </div>
    );
};

export default TaskStats;