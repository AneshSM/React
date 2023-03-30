import styled from "styled-components";
import { COLOR } from "../../constants";

const InnnerBar = styled.div`
  height: ${(props) => props.height}%;
  border-radius: 10px;
  width: 100%;
  background-color: ${COLOR.color_10};
`;
const OuterBar = styled.div`
  height: 80%;
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  border: 1px solid ${COLOR.color_60};
  background-color: ${COLOR.color_30};
  border-radius: var(--border_radius_max);
`;

export { OuterBar, InnnerBar };
