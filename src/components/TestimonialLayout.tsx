import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

type TestimonialLayoutProps = {
   children: React.ReactNode;
};

const StyledSection = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.common.black,
   padding: theme.spacing(2),
}));

const TestimonialLayout: React.FC<TestimonialLayoutProps> = ({ children }) => {
   return <StyledSection component={"section"}>{children}</StyledSection>;
};

export default TestimonialLayout;
