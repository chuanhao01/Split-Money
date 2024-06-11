import { Box, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box
      display={'flex'}
      alignContent={'center'}
      flexDirection={'column'}
      height={'90vh'}
      width={'100%'}
      paddingTop={8}
    >
      <Box>
        <Typography textAlign={'center'}>Sign In</Typography>
      </Box>
    </Box>
  );
}
