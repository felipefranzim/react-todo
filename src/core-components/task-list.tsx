import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/useTasks";
import useTask from "../hooks/useTask";
import { TaskState } from "../models/task";

export default function TaskList() {
    const { tasks } = useTasks();
    const { prepareNewTask } = useTask();

    return (
        <>
            <section>
                <Button icon={PlusIcon} 
                        className="w-full"
                        onClick={() => prepareNewTask()}
                        disabled={tasks?.some(task => task.state === TaskState.Creating)}>
                            Nova tarefa
                </Button>
            </section>
            <section className="space-y-2">
               {
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))
               }
            </section>
        </>
    )
}