import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeaderBg = styled.header`
  ${tw`bg-purple-700 mb-5`};
`;

export const HeaderContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-between max-w-screen-lg mx-auto p-5 `};
`;

export const Title = styled.h3`
  margin: 0;
`;
