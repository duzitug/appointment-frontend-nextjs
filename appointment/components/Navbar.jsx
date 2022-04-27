import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href={"/"}>
          <CameraIcon sx={{ mr: 2 }} />
        </Link>
        <Typography variant="h6" noWrap color={"white"}>
          <Link href={"/"}>Agendamento Vacina</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
