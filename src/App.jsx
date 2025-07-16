import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect } from "react";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Pegar dados de API
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setTasks(data);
    };
    // Se quiser você pode chamar uma API para pegar as tarefas
    // fetchTasks();
  }, []);

  // Completar Task
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISA ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISA ATUALIZAR A TAREFA
      return task;
    });

    setTasks(newTasks);
  }
  // Deleta a tarefa existente
  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }
  // Adiciona uma nova tarefa
  function onAddTaskClick(title, description) {
    const numsId = tasks.map((task) => {
      // Faz um novo array somente com os IDs para pegar o maior
      return task.id;
    });

    let maiorId =
      numsId.length > 0 ? numsId.reduce((a, b) => (a > b ? a : b)) : 0; // Se não houver ID no array o maiorId se torna zero

    const newTask = {
      id: maiorId + 2, // Novo ID é o maior existente
      title,
      description,
      isCompleted: false,
    };

    setTasks([newTask, ...tasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>

        <AddTask onAddTaskClick={onAddTaskClick} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
