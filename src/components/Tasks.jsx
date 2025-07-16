import { Check, ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); // Transforma as variáveis para padronizar a URL e evitar erros
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/tarefa?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.length === 0 ? (
        <li className="w-full text-center">Nenhuma tarefa adicionada</li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2 ">
            <Button
              onClick={() => onTaskClick(task.id)}
              className={` w-full px-3 ${
                task.isCompleted ? "line-through bg-lime-500" : " bg-slate-400"
              }`}
            >
              {task.isCompleted && <Check />}
              {task.title}
            </Button>
            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => deleteTask(task.id)}>
              <Trash />
            </Button>
          </li>
        ))
      )}
    </ul>
  );
}
export default Tasks;
