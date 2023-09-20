import { Button } from 'components/Buttons/ButtonStytled';
import { FavoriteButtonNormal } from 'components/Buttons/FavoriteButtonNormal';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { useAddToFavoriteCarMutation } from 'redux/carsSlice';
import styled from 'styled-components';
import { SingleCard } from './SingaleCard';

export const Card = props => {
  const [showModal, setShowModal] = useState(false);
  const [addToFavorite] = useAddToFavoriteCarMutation();

  const handleClick = value => {
    console.log(value.id);
    addToFavorite({ id: props.id, ...value, favorite: !value?.favorite });
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
    // setLargeImageURL(link);
  };

  return (
    <CardStyled>
      <ImageThumbStyled>
        <FavoriteButtonNormal
          isActive={props.favorite}
          handleClick={() => {
            handleClick(props);
          }}
        />
        <ImgStyled src={props.img} alt={props.model} />
      </ImageThumbStyled>
      <DescriptionContainer>
        <MainDescription>
          <p>
            {props.make}
            {/* <span>{props.model}</span> */}, {props.year}
          </p>
          <p>{props.rentalPrice}</p>
        </MainDescription>
        <BottomDescriptionContainer>
          <SecondaryDesriptionList>
            <li>{props.address.split(',')[1]}</li>
            <li>{props.address.split(',')[2]}</li>
            <li>{props.rentalCompany}</li>
            <li>{props.type}</li>
            <li>{props.model}</li>
            <li>{props.id}</li>
            <li>{props.accessories[1].split(' ').splice(2, 2).join(' ')}</li>
          </SecondaryDesriptionList>
          <Button onClick={toggleModal}>Learn more</Button>
        </BottomDescriptionContainer>
      </DescriptionContainer>
      {showModal && (
        <Modal onClickProp={toggleModal}>
          <SingleCard {...props} />
        </Modal>
      )}
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 274px;
  height: 426px;
`;

const ImageThumbStyled = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`;

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

const MainDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

const BottomDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const SecondaryDesriptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 4px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;
