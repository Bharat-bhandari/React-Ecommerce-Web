import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";

const ErrorPage = () => {
  const navigate = useNavigate();

  // Use useEffect to automatically redirect after 100ms

  const redirectTimeout = setTimeout(() => {
    navigate("/");
  }, 50);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Wrapper className="page-100">
        <section>
          <h1>404</h1>
          <h3>Sorry, the page you tried cannot be found</h3>
          {/* You can still use a Link or a button for manual redirection */}
          <Link className="btn" to="/">
            Back Home
          </Link>
        </section>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;