import { styled } from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";
// 모든 버튼 att를 받을 수 있음
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; //가운데 들어가는 값이 있을 때 필요
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean; //로딩 될 때는 버튼클릭 x
}
const Button = ({
  children,
  size,
  scheme,
  disabled,
  isLoading,
  onClick,
}: Props) => {
  return (
    <ButtonStyle
      size={size}
      scheme={scheme}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export const ButtonStyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
