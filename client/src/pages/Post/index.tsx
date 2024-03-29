import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import React, { useState, useEffect, FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Post as PostType, Syntax } from "../../constants/Types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { parseFrontMatter } from "../../helpers/utils";
import { spacing } from "../../constants/theme";
import { useParams } from "react-router-dom";
import * as C from "../../components";

const Post: FC = () => {
  const [post, setPost] = useState<PostType>({});
  const { title } = useParams();

  const getPost = async () => {
    try {
      const file = await fetch(`/posts/${title}.md`).then((res) => res.text());
      const fm = parseFrontMatter(file, title + ".md");
      setPost(fm);
    } catch (error) {
      console.log(error);
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
    li: (props: any) => {
      const { children } = props;
      return <Text>• {children}</Text>;
    },
    strong: (props: any) => {
      const { children } = props;
      return (
        <Text fontWeight="medium" display="inline">
          {children}
        </Text>
      );
    },
    img: (props: any) => {
      const { src } = props;
      return <Image boxSize="100%" src={src} />;
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
        {post?.iconColor?.split(",").map((color, index) => (
          <C.Icon
            key={index}
            icon={"post1"}
            iconWidth="100%"
            iconColor={color}
          />
        ))}
      </SimpleGrid>
      <Flex gridRowGap={4} width={["100%", "85%"]} flexDirection={"column"}>
        <ReactMarkdown
          components={ChakraUIRenderer(newTheme)}
          remarkPlugins={[remarkGfm]}
          skipHtml
        >
          {post?.body as string}
        </ReactMarkdown>
      </Flex>
    </>
  );
};

export { Post };
