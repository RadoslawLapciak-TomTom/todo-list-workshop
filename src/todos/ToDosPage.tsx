import { ToDosPageContainer } from './ToDos.style';
import { ToDos } from './ToDos/ToDos';
import { ToDosHeader } from './ToDosHeader/ToDosHeader';

export const ToDosPage = () => {
  return (
    <ToDosPageContainer>
      <ToDosHeader />
      <ToDos />
    </ToDosPageContainer>
  );
};
