// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import React from "react";

const About = () => {
  const { contextValue } = useContext(SomeContext);
  return <div>About</div>;
};

export default About;
