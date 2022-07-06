import { ToDo, ToDosResponse } from '../domain/todos.types';

const BASE_URL = 'http://localhost:8080';

const jsonFetch = async (url: string, init?: RequestInit | undefined) => {
  return await fetch(`${BASE_URL}/${url}`, {
    method: 'GET',
    ...init,
    headers: {
      ...init?.headers,
      'Content-Type': ' application/json',
    },
  });
};

export const apiClint = {
  fetchAllToDos: async (
    finished: boolean | undefined,
  ): Promise<ToDosResponse> => {
    const url = `toDos${
      finished !== undefined ? `?finished=${finished}` : ''
    } `;
    const response = await jsonFetch(url);
    return await response.json();
  },

  addToDo: async (toDo: Omit<ToDo, 'id'>) => {
    await jsonFetch('toDos', {
      method: 'POST',
      body: JSON.stringify(toDo),
    });
  },

  deleteToDo: async (id: number) => {
    await jsonFetch(`toDos/${id}`, {
      method: 'DELETE',
    });
  },
  updateToDo: async (toDo: ToDo) => {
    await jsonFetch(`toDos/${toDo.id}`, {
      method: 'PUT',
      body: JSON.stringify(toDo),
    });
  },
};
