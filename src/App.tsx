import React, { useState } from "react";
import { position, PositionProps } from "styled-system";
import styled from "styled-components";

type SquareBoxProps = PositionProps & {
  transition: number
}

const SquareBox = styled.button<SquareBoxProps>`
  width: 50px;
  height: 50px;
  position: relative;
  top: 50px;
  ${position}
  transition: left ${props => props.transition}s, top ${props => props.transition}s  linear;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MovingArea = styled.div`
  position: absolute;
  padding: 50px;
`;

const randomDistance = (): number => Math.floor(Math.random() * 100) - 10;

function App() {
  const [transistionSpeed, setSpeed] = useState("1");
  const [randomTop, setTop] = useState(randomDistance());
  const [randomLeft, setLeft] = useState(randomDistance());

  const onButtonClick = () => {
    setTop(randomDistance());
    setLeft(randomDistance());
  };

  return (
    <Container>
      <div>
        Enter transition speed here:
        <input
          type="number"
          onChange={(event) => {
            setSpeed(event.target.value);
          }}
          value={transistionSpeed}
        />
      </div>
      <MovingArea>
        <SquareBox onClick={onButtonClick} top={`${randomTop}vh`} left={`${randomLeft}vw`} transition={parseInt(transistionSpeed)}>Click me</SquareBox>
      </MovingArea>
    </Container>
  );
}

export default App;
