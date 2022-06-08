import Background from "../../components/Background";
import Button from "../../components/Button";

import { StyledDivHome } from "./styles";

const Home = () => {
  const ShowOnConsole = () => {
    console.log("clicou");
  };

  return (
    <Background>
      <StyledDivHome>
        <h2>olá</h2>
        <Button onClick={ShowOnConsole}>Clique aqui</Button>
      </StyledDivHome>
    </Background>
  );
};
export default Home;
