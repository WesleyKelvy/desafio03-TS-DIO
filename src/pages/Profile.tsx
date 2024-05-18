import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";
import { UserData } from "./Conta";

export const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLoggedIn, setUser } = useContext(AppContext);


  useEffect(() => {
    !isLoggedIn && navigate("/");

    const getData = async () => {
      try {
        const data = (await api) as UserData;
        setUser(data);
      } catch (error) {
        alert("Failed to fetch user data!");
      }
    };
    getData();
  }, [isLoggedIn, navigate, setUser]);

  if (user && id !== user.id) {
    navigate("/");
  }
  
  return (
    <SimpleGrid
      columns={1}
      spacing={8}
      padding={16}
      flex={1}
      alignSelf="center"
      alignItems="center"
    >
      {user === undefined ? (
        <Center>
          <Spinner size="xl" color="white" />
        </Center>
      ) : (
        <>
          <CardInfo
            mainContent={`${user.name}`}
            content={`${user.email}`}
            getBack={`/conta/${id}`}
          />
        </>
      )}
    </SimpleGrid>
  );
};
