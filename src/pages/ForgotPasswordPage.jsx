import React from "react";
import Container from "../components/container/container";
import Cookie from "../components/cookie/cookie";
import Footer from "../components/footer/footer";
import ForgotPassword from "../components/forgot_password/ForgotPassword";
import HeroSimple from "../components/hero/hero_simple";

export default function ForgotPasswordPage() {
  return (
    <>
      <section>
        <HeroSimple title="Forgot Password" />
        <Container>
          <ForgotPassword />
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
