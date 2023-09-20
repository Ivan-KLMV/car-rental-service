import { HeartActive, HeartNormal } from 'components/Svg/Svg';
import { useState } from 'react';
import styled from 'styled-components';

export const FavoriteButtonNormal = ({ isActive, handleClick }) => {
  const [isFavorite, setIsFavorite] = useState(isActive);

  const favHandler = () => {
    setIsFavorite(!isFavorite);
    handleClick();
  };

  return (
    <FavButtonStyled type="button" onClick={favHandler}>
      {isFavorite ? <HeartActive /> : <HeartNormal />}
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

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
