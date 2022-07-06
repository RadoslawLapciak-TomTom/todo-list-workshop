export interface ToDoResponse {
  id: number;
  content: string;
  finished: boolean;
}

export type ToDosResponse = ToDoResponse[];

export interface ToDo {
  id: number;
  content: string;
  finished: boolean;
}

export type ToDos = ToDo[];
