import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import { keyframes } from "@mui/material/styles";

const ContainerCard = styled(Stack)(({ theme }) => {
   const borderColorAnimation = keyframes`
     0% {
       border-color: #FFFFFF26;
     }
     100% {
       border-color: ${theme.palette.primary.dark};
     }
   `;

   return {
      width: "100%",
      maxWidth: "460px",
      height: "auto",
      minHeight: "365px",
      backgroundColor: "#FFFFFF1A",
      borderRadius: 20,
      padding: `${theme.spacing(5)} ${theme.spacing(3.75)} ${theme.spacing(
         6.25
      )} ${theme.spacing(3.75)}`,
      border: `1px solid #FFFFFF26`,
      color: theme.palette.common.white,
      transition: "border-color 0.5s ease-in-out",
      "&:hover": {
         border: `1px solid ${theme.palette.primary.dark}`,
         animation: `${borderColorAnimation} 0.5s forwards`,
      },
   };
});

const UserInfoBox = styled(Box)(() => ({
   height: "95px",
   width: "100%",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   gap: "15px",
}));

const TestimonialText = styled(Typography)(({ theme, variant }) => ({
   color:
      variant === "h5"
         ? theme.palette.primary.light
         : theme.palette.primary.dark,
   textAlign: "center",
}));

type TestimonialCardProps = {
   name: string;
   image: string;
   text: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
   name,
   image,
   text,
}) => {
   return (
      <ContainerCard rowGap={2.5}>
         <UserInfoBox>
            <Avatar src={image} alt={name} sx={{ width: 60, height: 60 }} />
            <TestimonialText variant="h5">{name}</TestimonialText>
         </UserInfoBox>
         <TestimonialText variant="body1">{text}</TestimonialText>
      </ContainerCard>
   );
};

export default TestimonialCard;
