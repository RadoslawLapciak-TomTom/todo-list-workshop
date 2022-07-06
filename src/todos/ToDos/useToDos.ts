import { useCallback, useEffect, useState } from 'react';
import { apiClient } from '../../core/api/apiClient';
import { ToDos } from '../../core/domain/todos.types';
import { ActiveFilterStatus } from './toDos.types';

interface Params {
  filterByContent: string;
  filterByStatus: ActiveFilterStatus;
}

const filterByFinished = (filterByStatus: ActiveFilterStatus) => {
  switch (filterByStatus) {
    case 'ACTIVE': {
      return false;
    }
    case 'FINISHED': {
      return true;
    }
    case 'ALL': {
      return undefined;
    }
  }
};

export const useToDos = ({ filterByContent, filterByStatus }: Params) => {
  const [allToDos, setAllToDos] = useState<ToDos | undefined>();
  const [filteredToDos, setFilteredToDos] = useState<ToDos>([]);

  const getAllToDos = useCallback(() => {
    apiClient
      .fetchAllToDos(filterByFinished(filterByStatus))
      .then((data) => setAllToDos(data));
  }, [filterByStatus]);

  useEffect(() => {
    getAllToDos();
  }, [getAllToDos]);

  useEffect(() => {
    if (allToDos) {
      const toDos = allToDos?.filter((toDo) =>
        toDo.content.includes(filterByContent),
      );
      setFilteredToDos(toDos);
    }
  }, [filterByContent, allToDos]);

  return { toDos: filteredToDos, refresh: getAllToDos };
};
