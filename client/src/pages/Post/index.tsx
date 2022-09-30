import React, { useState, useEffect, FC } from "react";
import * as C from "../../components";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";
import { spacing } from "../../constants/theme";
import { Post as PostType, Syntax } from "../../constants/Types";

const Post: FC = () => {
  const [post, setPost] = useState<PostType>({});
  const { title } = useParams();

  const getPost = async () => {
    const response = await fetch(`/api/post/${title}`);
    if (response.ok) {
      const json = await response.json();
      setPost(json);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const newTheme = {
    p: (props: any) => {
      const { children } = props;
      return <Text>{children}</Text>;
    },
    code({ node, inline, className, children, ...props }: Syntax) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={oneLight}
          customStyle={{
            fontSize: "0.8em",
            fontFamily: "Lab Mono",
          }}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      <SimpleGrid columns={[3]} spacing={spacing} mb={spacing}>
        <C.Icon icon={"post1"} iconWidth="100%" />
        <C.Icon icon={"post1"} iconWidth="100%" iconColor="#125706" />
        <C.Icon icon={"post1"} iconWidth="100%" iconColor="red" />
      </SimpleGrid>
      <Flex gridRowGap={4} width={["100%", "85%"]} flexDirection={"column"}>
        <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
          {post?.body as string}
        </ReactMarkdown>
      </Flex>
    </>
  );
};

export { Post };
