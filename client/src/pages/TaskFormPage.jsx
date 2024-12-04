import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/TaskContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const dateValid = data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()

    try {
      if (params.id) {
        await updateTask(params.id, {
          ...data,
          date: dateValid,
        });
      } else {
        await createTask({
          ...data,
          date: dateValid,
        });
      }

      navigate("/tasks");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            {...register("title", { required: true })}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}

          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Description"
            {...register("description", { required: true })}
          ></Textarea>
          {errors.description && (
            <p className="text-red-500 text-xs italic">Please enter a description.</p>
          )}

          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            name="date"
            {...register("date")}
          />

          <Button className="bg-indigo-500 px-4 py-1 rounded-md my-2">Save</Button>
        </form>
      </Card>
    </div>
  );
}