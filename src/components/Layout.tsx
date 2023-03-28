import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #151519;
`;
