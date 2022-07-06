import { ChangeEventHandler } from 'react';
import { ActiveFilterStatus } from '../ToDos/toDos.types';
import styled from 'styled-components';

interface Props {
  filterByContent: string;
  setFilterByContent: (val: string) => void;
  filterByStatus: ActiveFilterStatus;
  setFilterByStatus: (status: ActiveFilterStatus) => void;
  className?: string;
}

const BaseFilters = ({
  filterByContent,
  setFilterByContent,
  filterByStatus,
  setFilterByStatus,
  className,
}: Props) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setFilterByContent(ev.target.value);
  };

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (ev) => {
    const val = ev.target.value as ActiveFilterStatus;
    setFilterByStatus(val);
  };

  return (
    <div className={className}>
      <input value={filterByContent} onChange={handleInputChange} />
      <select value={filterByStatus} onChange={handleSelectChange}>
        <option value="ALL">All</option>
        <option value="FINISHED">Finished</option>
        <option value="ACTIVE">Active</option>
      </select>
    </div>
  );
};

export const Filters = styled(BaseFilters)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
