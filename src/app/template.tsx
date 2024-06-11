import Image from 'next/image';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="xl">
      <AppBar position="sticky">
        <Toolbar>
          <Typography flexGrow={1}>First</Typography>
          <Typography>Hello world</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
}
