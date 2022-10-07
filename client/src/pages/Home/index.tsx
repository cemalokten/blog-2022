import React, { FC } from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Tag } from "../../components/";
import { TagProps } from "../../constants/Types";
import { colors } from "../../constants/theme";
import { tech } from "../../constants/data";
import { useState, useEffect } from "react";
import * as util from "../../helpers/utils";

const Home: FC = () => {
  const [tag, setTag] = useState<any[]>([]);

  const createTag = (e: any) => {
    const label = tech[util.randomNumber(0, tech.length - 1)];
    const tagSpec = {
      label,
      top: e.clientY + "px",
      left: e.clientX + "px",
      height: util.randomNumber(1.3, 5),
      position: "absolute",
      backgroundColor: util.randomColour(colors),
      padding: util.randomNumber(10, 30),
      rotation: util.randomNumber(-25, 25),
      radius: util.randomNumberDecimal(0, 4),
    };
    setTag((prev) => [...prev, tagSpec]);
  };

  useEffect(() => {
    const click = document.getElementById("canvas");
    click?.addEventListener("click", createTag);
    console.log(tag.length);
    return () => click?.removeEventListener("click", createTag);
  }, []);

  return (
    <Flex grow={1} flexDirection="column">
      <Flex gridRowGap={4} width={["100%", "85%"]} flexDirection={"column"}>
        <Text>
          Hi my name is Cemal (Je-mal), I am a web developer. Once upon a time I
          worked in the design industry, designing furniture and products.
        </Text>
        <Text>
          Some projects I have recently enjoyed working on include a keyboard
          glockenspiel, a unique image generator, a clock that represents time
          in bars and a page which shows if the ISS is orbiting over land or
          sea. I also collaborated on an imaginary agency site called kindcode.
        </Text>
        <Text>
          <Link>Blog</Link> / GitHub
        </Text>
      </Flex>
      {tag.map((tagProps: TagProps, id: number) => (
        <Tag {...tagProps} key={id} />
      ))}
    </Flex>
  );
};

export { Home };
