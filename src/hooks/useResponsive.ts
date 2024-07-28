import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

function useResponsive(customSize: Breakpoint = "sm") {
   const theme: Theme = useTheme();
   const isBelowSm: boolean = useMediaQuery(theme.breakpoints.down("sm"));
   const isBelowMd: boolean = useMediaQuery(theme.breakpoints.down("md"));
   const isBelowLg: boolean = useMediaQuery(theme.breakpoints.down("lg"));
   const isAboveSm: boolean = useMediaQuery(theme.breakpoints.up("sm"));
   const isAboveMd: boolean = useMediaQuery(theme.breakpoints.up("md"));
   const isAboveLg: boolean = useMediaQuery(theme.breakpoints.up("lg"));
   const isBelowCustom: boolean = useMediaQuery(theme.breakpoints.down(customSize));
   const isAboveCustom: boolean = useMediaQuery(theme.breakpoints.up(customSize));

   return {
      isBelowSm,
      isBelowMd,
      isBelowLg,
      isAboveSm,
      isAboveMd,
      isAboveLg,
      isBelowCustom,
      isAboveCustom,
   };
}

export default useResponsive;
