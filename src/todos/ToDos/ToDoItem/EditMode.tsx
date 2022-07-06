import { ChangeEventHandler, useState } from 'react';
import { apiClient } from '../../../core/api/apiClient';
import { ToDo } from '../../../core/domain/todos.types';

interface Props {
  toDo: ToDo;
  disableEditMode: VoidFunction;
  refresh: VoidFunction;
}

export const EditMode = ({ toDo, disableEditMode, refresh }: Props) => {
  const [value, setValue] = useState(toDo.content);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setValue(ev.target.value);
  };

  const handleSave = () => {
    apiClient
      .updateToDo({ ...toDo, content: value })
      .then(refresh)
      .then(disableEditMode);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleSave}>save</button>
    </div>
  );
};
