import styled from 'styled-components';

export const TextError = styled.p`
  width: 100%;

  font-size: 24px;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  text-align: center;
  color: transparent;

  margin-top: 25px;
  padding-top: 5px;

  background: linear-gradient(-112deg, #fff, #ff5719);
  background-clip: text;
  -webkit-background-clip: text;
`;
