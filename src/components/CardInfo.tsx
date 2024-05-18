import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface ICardInfo {
  mainContent: string;
  content: string;
  getBack?: string;
}

const CardInfo = ({ mainContent, content, getBack }: ICardInfo) => {
  const navigate = useNavigate();

  return (
    <Box
      backgroundColor="white"
      minHeight="120px"
      padding={8}
      borderRadius="25px"
    >
      <Text fontSize="2xl" fontWeight="bold">
        {mainContent}
      </Text>
      <Text fontSize="xl">{content}</Text>
      {getBack && (
        <Button onClick={() => navigate(`${getBack}`)}>Voltar</Button>
      )}
    </Box>
  );
};

export default CardInfo;
