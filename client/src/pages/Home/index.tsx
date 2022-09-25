import { useState, useRef, useEffect } from "react";
import { tech } from "../../constants/data";
import * as util from "../../helpers/utils";
import { colors } from "../../constants/theme";
import { Tag } from "../../components/";
import React, { FC } from "react";
import { TagProps } from "../../constants/Types";
import { Flex, Link, Text } from "@chakra-ui/react";

const Home: FC = () => {
  const [tag, setTag] = useState<any[]>([]);

  const createTag = (e: any) => {
    const label = tech[util.randomNumber(0, tech.length - 1)];
    const tagSpec = {
      label,
      top: e.clientY + "px",
      left: e.clientX + "px",
      height: util.randomNumber(1, 5),
      position: "absolute",
      backgroundColor: util.randomColour(colors),
      rotation: util.randomNumber(-25, 25),
      radius: util.randomNumberDecimal(0, 4),
      key() {
        return this.label + this.backgroundColor;
      },
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
      <Flex gridRowGap={4} width={["100%", "85%"]} flexDirection={"column"}>
        <Text>
          Hi my name is Cemal (Je-mal), I am a web developer in the making. Once
          upon a time I worked in the design industry, designing furniture and
          products.{" "}
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
      {tag.map((tagProps: TagProps) => (
        <Tag {...tagProps} key={tagProps.key} />
      ))}
    </Flex>
  );
};

export { Home };
