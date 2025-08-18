import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Checkbox from "../components/checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import { useState } from "react";
import InputText from "../components/input-text";
import { type Task, TaskState } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/useTask";

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(task.state === TaskState.Creating);
    const [taskTitle, setTaskTitle] = useState(task.title || "");
    const { updateTask } = useTask(); 

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleExitEditing = () => {
        setIsEditing(false);
    }

    const handleTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setTaskTitle(e.target.value || "");
    }

    const handleSaveTask = (e: React.FormEvent) => {
        e.preventDefault();
        updateTask(task.id, { title: taskTitle });
        setIsEditing(false);
    }

    return (
        <Card size="md">
            {
                !isEditing ? (
                    <div className="flex items-center gap-3">
                        <Checkbox value={`${task?.completed}`} checked={task?.completed} />
                        <Text className={cx("flex-1", {
                            "line-through": task?.completed
                        })}>
                            { task?.title }    
                        </Text>
                        <div className="flex gap-1">
                            <ButtonIcon icon={TrashIcon} variant="tertiary" />
                            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEdit} />
                        </div>
                    </div>
                )
                    : (
                        <form onSubmit={handleSaveTask} className="flex items-center gap-3">
                            <InputText className="flex-1" 
                                       onChange={handleTaskTitle}
                                       value={taskTitle}
                                       required
                                       autoFocus />
                            <div className="flex gap-1">
                                <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitEditing} />
                                <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
                            </div>
                        </form>
                    )
            }
        </Card>
    )
}