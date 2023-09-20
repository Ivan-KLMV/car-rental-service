import { RentalButton } from 'components/Buttons/ButtonStytled';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export const SingleCard = props => {
  console.log(props.rentalConditions.split('\n'));
  return (
    <ModalCard>
      <ImageThumbStyled>
        <ImgStyled src={props.img} alt={props.model} />
      </ImageThumbStyled>
      <MainDescription>
        <p>
          {props.make}
          <span>{props.model}</span>, {props.year}
        </p>
      </MainDescription>
      <SecondaryDesriptionList>
        <li>{props.address.split(',')[1]}</li>
        <li>{props.address.split(',')[2]}</li>
        <li>id: {props.id}</li>
        <li>Year: {props.year}</li>
        <li>Type: {props.type}</li>
        <li>Fuel Consumption: {props.fuelConsumption}</li>
        <li>Engine Size: {props.engineSize}</li>
        <li>{props.rentalCompany}</li>
        <li>{props.model}</li>
        <li>{props.accessories[1].split(' ').splice(2, 2).join(' ')}</li>
      </SecondaryDesriptionList>
      <Description>{props.description}</Description>
      <DescriptionAccessories>
        Accessories and functionalities:
      </DescriptionAccessories>
      <SecondaryDesriptionList>
        {props.accessories.map(item => (
          <li key={nanoid()}>{item}</li>
        ))}
      </SecondaryDesriptionList>
      <DescriptionAccessories>Rental Conditions: </DescriptionAccessories>
      <ul
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}
      >
        {props.rentalConditions.split('\n').map(item => (
          <ConditionsItem key={nanoid()}>{item}</ConditionsItem>
        ))}
        <ConditionsItem>Mileage: {props.mileage}</ConditionsItem>
        <ConditionsItem>
          Price: <span>{props.rentalPrice}$</span>
        </ConditionsItem>
      </ul>
      <RentalButton as="a" href="tel:+380730000000">
        Rental
      </RentalButton>
    </ModalCard>
  );
};

const ModalCard = styled.div`
  width: 541px;
  /* height: 742px; */
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: white;
  border-radius: 24px;
`;

const ImageThumbStyled = styled.div`
  position: relative;
  width: 100%;
  height: 314px;
  border-radius: 14px;
  overflow: hidden;
`;

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  & span {
    margin-left: 5px;
    color: rgba(52, 112, 255, 1);
  }
`;

const SecondaryDesriptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 4px;
  margin-bottom: 14px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

const Description = styled.p`
  margin-bottom: 24px;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.428;
`;

const DescriptionAccessories = styled(Description)`
  margin-bottom: 8px;
  font-weight: 500;
`;
// color: #121417;
// font-family: Manrope;
// font-size: 14px;
// font-style: normal;
// font-weight: 500;
// line-height: 20px; /* 142.857% */

const ConditionsItem = styled.li`
  /* display: flex; */
  width: fit-content;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  background: #f9f9f9;
  /* gap: 8px; */
  color: #363535;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;
