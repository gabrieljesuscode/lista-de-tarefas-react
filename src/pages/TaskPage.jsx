import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams(); // Conseguir os valores através da URL nos query params
  let title = searchParams.get("title");
  let description = searchParams.get("description");

  // Retornar para página home
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 text-slate-200 rounded-md p-2"
          >
            <ChevronLeft />
          </button>

          <Title>Detalhes da tarefa</Title>
        </div>

        <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow flex flex-col">
          <h3 className="font-bold text-slate-600 text-2xl text-center">
            {title}
          </h3>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
