const TaskSearch = ({ searchTerm, set}) =>{
    return (
        <input 
         type ="text"
         placeholder="Search tasks..."
         value={searchTerm}
         onChange={(e) => set(e.target.value)}
        />
    )
}