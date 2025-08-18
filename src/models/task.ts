export enum TaskState {
    Creating = "creating",
    Crated = "created",
}

export interface Task {
    id: string;
    title: string;
    completed?: boolean;
    state?: TaskState;
}