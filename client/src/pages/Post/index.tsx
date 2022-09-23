import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState, useEffect, FC } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import * as C from "../../components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PostProps {
  title?: string;
  date?: string;
  body?: string;
}

interface CodeProps {
  node?: any;
  inline?: any;
  className?: any;
  children?: any;
}

const code = {
  code({ node, inline, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneLight}
        customStyle={{
          fontSize: "0.8em",
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
const Post: FC = () => {
  const [post, setPost] = useState<PostProps>({});
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

  return (
    <>
      <SimpleGrid columns={[3, 3, 6, 6]} spacing={8} mb={8}>
        <C.Icon icon={"post1"} iconWidth="100%" />
        <C.Icon icon={"post1"} iconWidth="100%" iconColor="#125706" />
        <C.Icon icon={"post1"} iconWidth="100%" iconColor="red" />
        <C.Icon icon={"post1"} iconWidth="100%" iconColor="yellow" />
        <C.Icon icon={"post1"} iconWidth="100%" iconColor="blue" />
        <C.Icon icon={"post1"} iconWidth="100%" iconColor="maroon" />
      </SimpleGrid>
      <Flex gridRowGap={4} width={["100%", "85%"]} flexDirection={"column"}>
        <C.Paragraph>
          <ReactMarkdown components={code}>
            {post?.body as string}
          </ReactMarkdown>
          <ReactMarkdown>{post?.date as string}</ReactMarkdown>
        </C.Paragraph>
      </Flex>
    </>
  );
};

export { Post };
