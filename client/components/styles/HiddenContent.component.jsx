import styled from "styled-components";

const HideContentOnSmall = styled.div`
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const HiddenOnPhone = ({ children }) => {
  return <HideContentOnSmall>{children}</HideContentOnSmall>;
};
