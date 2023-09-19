import styled from 'styled-components';

export const InputMileage = ({ inputHandler }) => {
  return (
    <InputContainer>
      <LableStyled htmlFor="car-mileage">Сar mileage / km</LableStyled>
      <div style={{ display: 'flex' }}>
        <InputStyled
          autoComplete="off"
          id="car-mileage"
          name="from"
          placeholder="From"
          onBlur={e => {
            e.preventDefault();
            const { name, value } = e.target;
            // console.dir(value);
            inputHandler({ name, value });
          }}
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: '1px solid rgba(138, 138, 137, 0.2)',
          }}
        />
        <InputStyled
          autoComplete="off"
          id="car-mileage"
          name="to"
          placeholder="To"
          onBlur={e => {
            e.preventDefault();
            const { name, value } = e.target;
            // console.dir(value);
            inputHandler({ name, value });
          }}
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        />
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  flex-basis: 320px;
`;

const LableStyled = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.287;
`;

const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 18px;
  border: unset;
  border-radius: 14px;
  background: #f7f7fb;
  color: rgba(18, 20, 23, 1);
  font-family: 'Manrope';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111;

  &::placeholder {
    color: rgba(18, 20, 23, 1);
  }

  &:focus-visible {
    outline: 1px solid rgba(138, 138, 137, 0.2);
  }
`;
