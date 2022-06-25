import { Container, Row } from 'reactstrap';

import styled from 'styled-components';
import FooterAbout from './footerAbout';
import FooterLinks from './footerLinks';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <FooterAbout />
          <FooterLinks data={QuickLinks} />
          <FooterLinks data={SocialMedia} />
          <FooterLinks data={Contact} index={2} />
        </Row>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #f5f8f8;
  padding: 3rem;
  .row {
    padding: 3rem 0 6px;
    text-align: left;
  }
`;

const QuickLinks = {
  title: 'Quick Links',
  footerLink: [
    {
      body: 'Home',
      URL: '/'
    },
    {
      body: 'about',
      URL: '/about'
    },
    {
      body: 'toolbox',
      URL: '/toolbox'
    },
    {
      body: 'contact',
      URL: '/contact'
    }
  ]
};

const SocialMedia = {
  title: 'Social',
  footerLink: [
    {
      body: 'LinkedIn',
      URL: 'https://www.linkedin.com/company/variablescoop',
      icon: 'linkedin-square'
    },
    {
      body: 'Twitter',
      URL: 'https://twitter.com/VariableScoop',
      icon: 'twitter-square'
    },
    {
      body: 'Facebook',
      URL: 'https://www.facebook.com/variablescoop',
      icon: 'facebook-square'
    }
  ]
};
const Contact = {
  title: 'Contact',
  footerLink: [
    {
      body: 'dawn@variablescoop.com',
      URL: 'mailto:dawn@variablescoop.com',
      icon: 'envelope-square'
    },
    {
      body: '+1 (240) 401 - 8975',
      URL: 'tel:+12404018975',
      icon: 'phone-square'
    }
  ]
};
export default Footer;
