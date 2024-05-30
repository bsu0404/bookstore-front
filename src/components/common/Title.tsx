import React from "react";
import { styled } from "styled-components";
import { ColorKey, HeadingSize } from "../../style/theme";

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}
const Title = ({ children, size, color }: Props) => {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
};
// 위에 정의한 Props에서 children을 제외하고 받겠다는 의미
const TitleStyle = styled.h1<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;

export default Title;
