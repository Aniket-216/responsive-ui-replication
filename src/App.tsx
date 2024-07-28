import { styled } from "@mui/material";
import TestimonialLayout from "./components/TestimonialLayout";
import Home from "./pages/Home";

const MainContainer = styled("main")(({ theme }) => ({
   width: "100%",
   height: "100vh",
   display: "flex",
   flexDirection: "column",
   overflow: "hidden",
   backgroundColor: theme.palette.common.black,
}));

function App() {
   return (
      <MainContainer>
         <TestimonialLayout>
            <Home />
         </TestimonialLayout>
      </MainContainer>
   );
}

export default App;
