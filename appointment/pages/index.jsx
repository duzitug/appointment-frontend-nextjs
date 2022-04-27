import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Marque e monitore agendamentos
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href={"createAppointment"}>
                <Button variant="contained">Agendar</Button>
              </Link>

              <Link href={"appointmentList"}>
                <Button variant="outlined">Ver Agendamentos</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
