import useLocalStorage from "use-local-storage";
import { Task, TaskState } from "../models/task";

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

    const prepareNewTask = () => {
        setTasks([...tasks, {
            id: crypto.randomUUID(),
            title: "",
            state: TaskState.Creating
        }]);
    }

    const updateTask = (id: string, payload: { title: Task["title"] }) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    ...payload,
                    state: TaskState.Crated
                };
            }
            return task;
        }));
    }

    return {
        prepareNewTask,
        updateTask
    }
}