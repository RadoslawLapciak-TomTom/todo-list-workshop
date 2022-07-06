import { useState } from 'react';
import { Filters } from '../Filters/Filters';
import { NewToDo } from '../NewTodo/NewToDo';
import { ToDoItem } from './ToDoItem/ToDoItem';
import { ToDosContainer } from './ToDos.style';
import { ActiveFilterStatus } from './toDos.types';
import { useToDos } from './useToDos';

export const ToDos = () => {
  const [filterByStatus, setFilterByStatus] =
    useState<ActiveFilterStatus>('ALL');
  const [filterByContent, setFilterByContent] = useState('');

  const { toDos, refresh } = useToDos({ filterByContent, filterByStatus });

  return (
    <div>
      <Filters
        filterByContent={filterByContent}
        setFilterByContent={setFilterByContent}
        filterByStatus={filterByStatus}
        setFilterByStatus={setFilterByStatus}
      />
      <ToDosContainer>
        {toDos?.map((toDo) => (
          <ToDoItem key={toDo.id} toDo={toDo} refresh={refresh} />
        ))}
      </ToDosContainer>
      <NewToDo refresh={refresh} />
    </div>
  );
};
