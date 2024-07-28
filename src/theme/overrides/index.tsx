import { Theme } from "@mui/material/styles";

import Typography from "./Typography";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
   return Object.assign(Typography(theme));
}
