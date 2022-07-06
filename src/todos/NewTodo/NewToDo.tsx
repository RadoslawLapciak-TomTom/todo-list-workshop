import { ChangeEventHandler, useState } from 'react';
import { apiClint } from '../../core/api/apiClient';
import styled from 'styled-components';

interface Props {
  refresh: VoidFunction;
  className?: string;
}

const BaseNewToDo = ({ refresh, className }: Props) => {
  const [value, setValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setValue(ev.target.value);
  };

  const handleSave = () => {
    apiClint
      .addToDo({ content: value, finished: false })
      .then(refresh)
      .then(() => setValue(''));
  };

  return (
    <div className={className}>
      <input onChange={handleChange} value={value} />{' '}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export const NewToDo = styled(BaseNewToDo)`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
