import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  linelimit: number;
}
export const EllipsisBox = ({ children, linelimit }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <EllipsisBoxStyle linelimit={linelimit} $expanded={expanded}>
      <p>{children}</p>
      <div className="toggle">
        <Button
          size="small"
          scheme="normal"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "접기" : "더보기"} <FaAngleDown />
        </Button>
      </div>
    </EllipsisBoxStyle>
  );
};

interface EllipsisBoxStyleProps {
  linelimit: number;
  $expanded: boolean;
}

// div는 attribute를 string만 받을 수 있음
// styled component와 일반적인 attribute를 구분할 수 없어서
// boolean을 넘겨줄 수 없다.
const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ linelimit, $expanded }) =>
      $expanded ? "none" : linelimit};
    -webkit-box-orient: vertical;
    padding: 20px 0 0 0;
    margin: 0 0 10px 0;
  }
  .toggle {
    display: flex;
    justify-content: end;
    svg {
      transform: ${({ $expanded }) =>
        $expanded ? "rotate(180deg)" : "rotate(0)"};
    }
  }
`;

export default EllipsisBox;
