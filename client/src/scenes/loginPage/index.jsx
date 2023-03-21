import { ChatBubble } from "@mui/icons-material";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ChatBubble color="primary" />
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Chatty
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Chatty - the app that helps you stay connected with people
          who matter most!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
