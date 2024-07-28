import { GlobalStyles as MUIGlobalStyles, useTheme } from "@mui/material";

export default function GlobalStyles() {
   const theme = useTheme();
   const inputGlobalStyles = (
      <MUIGlobalStyles
         styles={{
            "*": {
               boxSizing: "border-box",
            },
            html: {
               margin: 0,
               padding: 0,
               scrollBehavior: "smooth",
            },
            body: {
               margin: 0,
               padding: 0,
               backgroundColor: theme.palette.common.black,
               WebkitFontSmoothing: "antialiased",
               fontFamily: ["Poppins", "Montserrat"].join(","),
            },
            img: {
               display: "block",
               maxWidth: "100%",
            },
            ul: {
               margin: 0,
               padding: 0,
            },
         }}
      />
   );

   return inputGlobalStyles;
}
