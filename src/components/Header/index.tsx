import { Container, ContactUsContainer } from './styles';

import { ReactComponent as WhatsAppIcon } from '../../assets/whatsapp.svg';

export const Header: React.FC = () => {
  return (
    <Container>
      <ContactUsContainer>
        <WhatsAppIcon />
        Fale conosco
      </ContactUsContainer>
    </Container>
  );
};
