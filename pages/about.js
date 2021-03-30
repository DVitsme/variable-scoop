import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import aboutData from "../components/data/about.json";

import { Container as ReactstrapContainer, Row, Col } from "reactstrap";

import { BoldFirstWord } from "../components/styles/BoldWord.component";

const Container = styled(ReactstrapContainer)`
  width: 100% !important;
`;

const ImageLeft = styled(Col)`
  background-image: url(${aboutData.bodyImage.url});
  background-position: center center;
  background-size: cover;
  padding: 8% 8% 8% 8%;
`;
const ContentRight = styled(Col)`
  padding: 0 5%;
  h3 {
    text-transform: uppercase;
    margin-top: 40px;
    color: ${(props) => props.theme.orange};
  }
`;
const About = () => {
  const {
    title,
    bodySubHeaderOne,
    bodyContentOne,
    bodySubheaderTwo,
    bodyContentTwo,
    bodyImage,
  } = aboutData;
  return (
    <Container fluid>
      <Row>
        <ImageLeft md={6} image={bodyImage}></ImageLeft>
        <ContentRight md={6}>
          <BoldFirstWord content={bodySubHeaderOne} />
          <p>
            Valentine Consulting was created in 1996 by Dawn Valentine as a
            project in self-determination. Since its inception, we have always
            worked alongside programs that support disenfranchised people and
            populations. In 2018, we decided it was time to grow up. We became
            Valentine Consulting LLC, also known as the Variable Scoop. The
            mission is to arm fellow social entrepreneurs, individuals, and
            organizations with the ability to utilize their data to fight
            against the world's most pressing social, environmental, and
            cultural challenges.
          </p>
          <p>
            Dawn Valentine is the frontwoman. She works with a team of freelance
            evaluators, data scientists, graphic design artists, statisticians,
            project managers, and art therapists who believe in social justice
            and community transformation. If you are interested in partnering
            with us, please get in touch.
          </p>
          <hr />
          <BoldFirstWord content={bodySubheaderTwo} />
          <p>
            Dawn is a social entrepreneur and founder of Valentine Consulting.
            She believes in the power of advocacy and thinks reliable data
            combined with a fantastic story is the best way to capture people's
            attention. In her journey as a consultant, she has worked alongside
            governments, nonprofits, coalitions, and academic institutions
            conducting primary research as well as consultation for monitoring
            and evaluations for programs that shift paradigms to reduce human
            suffering.
          </p>
          <p>
            Ms. Valentine studied Healthcare Administration at Washington
            Adventist University, Public Administration and Public Policy at
            Walden University, and Public Health with an emphasis in
            epidemiology at George Washington University.
          </p>
          <p>
            She has more than a decade of experience in community-based public
            health and social science research and more than five years of
            experience in program evaluation and continuous quality improvement.
            She has worked as the Project Coordinator/Director on multiple
            research projects funded by NIH and CDC; Program Director for long
            term care facilities funded by CMS; lead evaluator for DC Tobacco
            Control, CDC Community Transformation Grant, Chronic Disease
            Program: Million Hearts and DC Rape Prevention Program.
          </p>
          {/* Im lazy dont ask me why I did it this way. Its fine*/}
          <div className="my-5 py-3"></div>
        </ContentRight>
      </Row>
    </Container>
  );
};

export default About;
