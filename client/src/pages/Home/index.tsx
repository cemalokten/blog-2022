import { useState } from "react";
import { useEffect } from "react";
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
import { Flex, Box } from "@chakra-ui/react";

const Home: FC = () => {
  const [tag, setTag] = useState<any[]>([]);

  const createTag = (e: any) => {
    const tagSpec = {
      left: e.clientX + "px",
      top: e.clientY + "px",
      backgroundColor: randomColour(colors),
      rotation: randomNumber(-25, 25),
      label: tech[randomNumber(0, tech.length - 1)],
      key() {
        return this.label + this.backgroundColor;
      },
      height: randomNumberDecimal(1, 5),
      position: "absolute",
    };
    setTag((prev) => [...prev, tagSpec]);
  };

  useEffect(() => {
    const click = document.getElementById("root");
    click?.addEventListener("click", createTag);
    return () => click?.removeEventListener("click", createTag);
  }, []);

  return (
    <Flex id="canvas">
      {tag.map((tagProps: TagProps) => (
        <Tag {...tagProps} key={tagProps.key} />
      ))}
      <Flex gridRowGap={4} width={4 / 6} flexDirection={"column"}>
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
      </Flex>
    </Flex>
  );
};

export { Home };
