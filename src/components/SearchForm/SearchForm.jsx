import styled from 'styled-components';

export const SearchForm = props => {
  return (
    <form style={{ display: 'flex', gap: 18 }}>
      <label
        htmlFor="makes"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,

          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.29,
          color: '#8A8A89',
        }}
      >
        Car brand
        <InputStyled
          list="makes_of_cars"
          name="makes"
          id="makes"
          placeholder="Enter the text"
        />
        <DataListStyled id="makes_of_cars">
          {props.makes.map(make => (
            <option key={make}>{make}</option>
          ))}
        </DataListStyled>
      </label>

      <label
        htmlFor="price"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,

          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.29,
          color: '#8A8A89',
        }}
      >
        Price/ 1 hour
        <input
          list="price per hour"
          name="price"
          id="price"
          style={{ padding: '14px 18px' }}
        />
        <datalist id="price per hour">
          {props.rentalPrices.map(item => (
            <option key={item.id}>{item.rentalPrice}</option>
          ))}
        </datalist>
      </label>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,

          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.29,
          color: '#8A8A89',
        }}
      >
        Сar mileage / km
        <input />
        <input />
      </label>
    </form>
  );
};

const InputStyled = styled.input`
  padding: 14px 18px;
  border-radius: 14px;
  border: none;
  background-color: #f7f7fb;

  &::placeholder {
    font-size: 18px;
    font-weight: 500;
    opacity: 1;
    color: #121417;
  }
`;
const DataListStyled = styled.datalist`
  background-color: lightgreen;
`;
