import { useState, useRef, useEffect } from "react";
import { tech } from "../../constants/data";
import {
  randomNumber,
  randomNumberDecimal,
  randomColour,
} from "../../helpers/utils";
import { colors } from "../../constants/theme";
import { Tag } from "../../components/";
import React, { FC } from "react";
import * as C from "../../components";
import { TagProps } from "../../constants/Types";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";

const Home: FC = () => {
  const [tag, setTag] = useState<any[]>([]);

  const createTag = (e: any) => {
    const label = tech[randomNumber(0, tech.length - 1)];
    const tagSpec = {
      left: e.clientX + "px",
      top: e.clientY + "px",
      backgroundColor: randomColour(colors),
      rotation: randomNumber(-25, 25),
      label,
      key() {
        return this.label + this.backgroundColor;
      },
      height: randomNumber(1, 5),
      radius: randomNumberDecimal(0, 4),
      position: "absolute",
    };
    setTag((prev) => [...prev, tagSpec]);
  };

  useEffect(() => {
    const click = document.getElementById("canvas");
    click?.addEventListener("click", createTag);
    return () => click?.removeEventListener("click", createTag);
  }, []);

  return (
    <Flex grow={2} flexDirection="column" mb="8em" id="canvas">
      {tag.map((tagProps: TagProps) => (
        <Tag {...tagProps} key={tagProps.key} />
      ))}
      <Flex gridRowGap={4} width={["100%", "85%"]} flexDirection={"column"}>
        <C.Paragraph>
          Hi my name is Cemal (Je-mal), I am a web developer in the making. Once
          upon a time I worked in the design industry, designing furniture and
          products.{" "}
        </C.Paragraph>
        <C.Paragraph>
          Some projects I have recently enjoyed working on include a keyboard
          glockenspiel, a unique image generator, a clock that represents time
          in bars and a page which shows if the ISS is orbiting over land or
          sea. I also collaborated on an imaginary agency site called kindcode.
        </C.Paragraph>
        <C.Paragraph>
          <C.Button>Email</C.Button> / GitHub
        </C.Paragraph>
      </Flex>
    </Flex>
  );
};

export { Home };
