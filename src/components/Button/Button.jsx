import styled from 'styled-components';

export const Button = ({ children }) => {
  const isLearnMoreButton = children === 'Learn more';

  return (
    <ButtonStyled
      type="button"
      style={{
        width: isLearnMoreButton && '100%',
        paddingRight: !isLearnMoreButton && '50px',
        paddingLeft: !isLearnMoreButton && '50px',
      }}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  font-family: 'Manrope';
  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
