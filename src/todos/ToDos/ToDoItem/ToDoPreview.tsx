import { ChangeEventHandler } from 'react';
import { ToDoContent } from '../ToDos.style';

interface Props {
  onClick: VoidFunction;
  checked: boolean;
  onChangeFinished: ChangeEventHandler<HTMLInputElement>;
  content: string;
}

export const ToDoPreview = ({
  checked,
  onChangeFinished,
  onClick,
  content,
}: Props) => {
  return (
    <div onClick={onClick}>
      <input
        type="checkbox"
        checked={checked}
        onChangeCapture={onChangeFinished}
        onClick={(ev) => ev.stopPropagation()}
      />{' '}
      <ToDoContent finished={checked}>{content}</ToDoContent>
    </div>
  );
};
