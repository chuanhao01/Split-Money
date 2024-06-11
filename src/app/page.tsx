import { auth } from '@/auth';
import { Box, Typography } from '@mui/material';

export default async function Home() {
  const session = await auth();
  return (
    <Box>
      <Typography variant="h1">Hello home page</Typography>
      <Typography>{JSON.stringify(session)}</Typography>
    </Box>
  );
}
