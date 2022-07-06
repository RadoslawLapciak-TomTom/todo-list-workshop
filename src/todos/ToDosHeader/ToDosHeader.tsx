import styled from 'styled-components';
import './todos-header.css';
import styles from './todos-header.module.css';

export const ToDosCSSHeader = () => {
  return <h1 className="todos-header">Todos APP</h1>;
};

export const ToDosCssModulesHeader = () => {
  return <h1 className={styles.todosHeader}>Todos APP</h1>;
};

interface Props {
  className?: string;
}

const BaseToDosHeader = ({ className }: Props) => {
  return <h1 className={className}>Todos APP</h1>;
};

export const ToDosHeader = styled(BaseToDosHeader)`
  font-size: 24px;
  color: rgb(222, 28, 18);
  text-decoration: underline;
`;
