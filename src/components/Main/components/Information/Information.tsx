import { useState } from 'react';
import styled, { css } from 'styled-components';

const List = styled.ul`
  width: 100%;
  max-width: 415px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 25px;
  gap: 15px;
`;

const ListItem = styled.li`
  width: 100%;
  max-width: 200px;

  padding: 15px 25px;

  opacity: 0.6;
  background-color: rgb(250, 250, 250, 0.1);

  &:hover {
    transform: scale(1.03);
    opacity: 1;
  }
`;

const Text = styled.p<{ upperCase?: boolean }>`
  text-align: center;
  color: ${(props) => props.theme.pallette.common.white};

  ${(props) =>
    props.upperCase &&
    css`
      font-size: 38px;

      padding-top: 10px;
    `}
`;

export const Information = () => {
  const defaultList = [
    {
      id: 0,
      title: 'мы',
      number: '1',
      description: 'рынке',
    },
    {
      id: 1,
      title: 'гарантируем',
      number: '50%',
      description: 'безопасность',
    },
    {
      id: 2,
      title: 'календарь за',
      number: '2001',
      description: 'в подарок',
    },
    {
      id: 3,
      title: 'путешествие',
      number: '597',
      description: 'дней',
    },
  ];
  const [list, setList] = useState(defaultList);

  return (
    <List>
      {list.map((element) => (
        <ListItem key={element.id}>
          <Text>{element.title}</Text>
          <Text upperCase>{element.number}</Text>
          <Text>{element.description}</Text>
        </ListItem>
      ))}
    </List>
  );
};
