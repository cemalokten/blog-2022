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
    return () => click?.removeEventListener("click", createTag);
  }, []);

  return (
    <Flex grow={1} flexDirection="column">
      <Flex gridRowGap={4} width={["100%", "85%"]} flexDirection={"column"}>
        <Text>
          Hi, I am a London based web-developer with a passion for making stuff.
        </Text>
        <Text>
          Get in touch with me via{" "}
          <Link href="mailto:cemalokten@gmail.com">Email</Link>,{" "}
          <Link href="https://twitter.com/cemalokten">Twitter</Link> or{" "}
          <Link href="https://github.com/cemalokten">GitHub</Link>.
        </Text>
      </Flex>
      {tag.map((tagProps: TagProps, id: number) => (
        <Tag {...tagProps} key={id} />
      ))}
    </Flex>
  );
};

export { Home };
