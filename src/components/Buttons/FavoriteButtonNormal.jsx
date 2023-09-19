import { HeartActive, HeartNormal } from 'components/Svg/Svg';
import styled from 'styled-components';

export const FavoriteButtonNormal = ({ isActive, handleClick }) => {
  //   const { data } = useGetCarsByIdQuery(handleClick, { skip: handleClick });
  //   console.log(data);
  return (
    <FavButtonStyled type="button" onClick={handleClick}>
      {isActive ? <HeartActive /> : <HeartNormal />}
    </FavButtonStyled>
  );
};

const FavButtonStyled = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
  margin: 0;
  padding: 0;
  border: unset;
  background: unset;
`;
