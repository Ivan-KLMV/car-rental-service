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
    background-color: #0b44cd;
  }
`;

export const SearchButton = styled(Button)`
  height: fit-content;
  width: fit-content;
  padding: 14px 44px;
  align-self: flex-end;
`;
