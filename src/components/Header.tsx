import React from 'react';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Section from 'components/Section';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import { SITE, MAIN_MENU } from 'utils/config';

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  const theme = useTheme();

  return (
    <Section style={{ backgroundColor: theme.palette?.background?.header }}>
      <Container maxWidth='lg'>
        <HeaderContent>
          <Logo title={SITE.title} width={SITE.logoWidth} />
          <Menu items={MAIN_MENU} />
        </HeaderContent>
      </Container>
    </Section>
  );
}
