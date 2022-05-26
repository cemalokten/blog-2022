import { FunctionalComponent, h } from "preact";
import style from "./style.css";

const getPosts = async () => {
  const response = await fetch("api/posts");
  if (response.ok) {
    let json = await response.json();
    console.log(json);
  } else {
    alert("HTTP-Error: " + response.status);
  }
};

getPosts();

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
};

export default Home;
