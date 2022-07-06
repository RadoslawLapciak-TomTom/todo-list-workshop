import { ChangeEventHandler, useState } from 'react';
import { apiClient } from '../../../core/api/apiClient';
import { ToDo } from '../../../core/domain/todos.types';
import { EditMode } from './EditMode';
import { ItemContainer } from './ToDoItem.style';
import { ToDoPreview } from './ToDoPreview';

interface Props {
  toDo: ToDo;
  refresh: VoidFunction;
}

export const ToDoItem = ({ toDo, refresh }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    apiClient.deleteToDo(toDo.id).then(refresh);
  };

  const handleChangeFinished: ChangeEventHandler<HTMLInputElement> = (ev) => {
    apiClient
      .updateToDo({ ...toDo, finished: ev.target.checked })
      .then(refresh);
    ev.stopPropagation();
  };

  const enableEditMode = () => setEditMode(true);
  const disableEditMode = () => setEditMode(false);

  return (
    <ItemContainer>
      {editMode ? (
        <EditMode
          disableEditMode={disableEditMode}
          toDo={toDo}
          refresh={refresh}
        />
      ) : (
        <ToDoPreview
          content={toDo.content}
          checked={toDo.finished}
          onChangeFinished={handleChangeFinished}
          onClick={enableEditMode}
        />
      )}{' '}
      {!editMode && <button onClick={handleDelete}>Delete</button>}{' '}
    </ItemContainer>
  );
};
