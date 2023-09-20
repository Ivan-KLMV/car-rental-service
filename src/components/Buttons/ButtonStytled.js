const { default: styled } = require('styled-components');

export const Button = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.428;
  font-family: 'Manrope';
  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #0b44cd;
  }
`;

export const SearchButton = styled(Button)`
  height: fit-content;
  width: fit-content;
  padding: 14px 44px;
  align-self: flex-end;
`;

export const LoadMoreButton = styled.button`
  /* color: #3470ff; */
  border: unset;
  background: unset;
  margin: unset;
  padding: unset;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;
  transition: color 250ms ease-in-out;

  color: rgba(52, 112, 255, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    color: rgba(11, 68, 205, 1);
  }
`;

export const RentalButton = styled(Button)`
  padding: 12px 50px;
  height: fit-content;
  width: fit-content;
`;
