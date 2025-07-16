import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md flex flex-col shadow">
      <Input
        type="text"
        value={title}
        onChange={(input) => setTitle(input.target.value)}
        placeholder="Digite o título da tarefa"
      />
      <Input
        value={description}
        onChange={(input) => setDescription(input.target.value)}
        placeholder="Digite a descrição da tarefa"
      />
      <button
        onClick={() => {
          // Verificar se o título e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }

          onAddTaskClick(title.trim(), description.trim());
          setTitle("");
          setDescription("");
        }}
        className="p-2 rounded-md text-white font-bold bg-cyan-900 active:scale-95 active:opacity-80 transition"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
