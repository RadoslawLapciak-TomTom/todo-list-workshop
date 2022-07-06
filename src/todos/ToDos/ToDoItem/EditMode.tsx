import { ChangeEventHandler, useRef, useState } from 'react';
import { apiClient } from '../../../core/api/apiClient';
import { ToDo } from '../../../core/domain/todos.types';
import styled from 'styled-components';
import { useOnClickOutside } from '../../../core/hooks/useOnClickOutside';
import { Input } from '../../../core/Components/Input';

interface Props {
  toDo: ToDo;
  disableEditMode: VoidFunction;
  refresh: VoidFunction;
  className?: string;
}

const BaseEditMode = ({ toDo, disableEditMode, refresh, className }: Props) => {
  const ref = useRef(null);
  useOnClickOutside(ref, disableEditMode);

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
    <div className={className} ref={ref}>
      <Input value={value} onChange={handleChange} />
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export const EditMode = styled(BaseEditMode)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > input {
    margin-right: 4px;
  }
`;
