import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ExamTable from "./components/ExamTable";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Sidebar />
      <AddTodo />
      <Stats />
      <ExamTable />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;