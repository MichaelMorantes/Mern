import { useTasks } from "../../context/TaskContext";
import { Button, ButtonLink, Card } from "../ui";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <ButtonLink to={`/tasks/${task._id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">Edit</ButtonLink>
          <Button onClick={() => deleteTask(task._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Delete</Button>
        </div>
      </header>
      <div className="border-t border-gray-300 my-4"></div>
      <p className="text-slate-300">{task.description}</p>
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}