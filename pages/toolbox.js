import React from "react";

import { Container as ContainerReacstrap, Row } from "reactstrap";

import toolboxData from "../components/data/toolbox.json";

import Title from "../components/styles/Title";
import styled from "styled-components";
import TabTile from "../components/tabTile";

const Toolbox = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title title="Creative Evaluation Toolbox" />
        <p>
          Our clients offer sparks of hope and opportunity in the face of
          adversity, inequity, and inequality. We want to support our clients by
          igniting that spark and transforming it into a flame. At Variable
          Scoop, we use creative elements and take a collaborative approach to
          support community-based inquiry by selecting tools to encourage
          reflection and dialogue among community stakeholders. Check out some
          of our favorite evaluation tools …these tools can be used as a
          stand-alone service!
        </p>
      </TitleWrapper>
      <Row>
        {toolboxData.map((area) => (
          <TabTile tile={area} key={area._id} />
        ))}
      </Row>
    </Container>
  );
};

export default Toolbox;

const Container = styled(ContainerReacstrap)`
  background-image: url("/images/backgrounds/globe_in_dots.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;
const TitleWrapper = styled.div`
  padding-bottom: 4rem;
  p {
    width: 90%;
    font-weight: 400;
    color: ${(props) => props.theme.gray};
    padding-bottom: 2.6rem;
    border-bottom: 1px solid rgba(105, 102, 135, 0.1);
  }
`;
