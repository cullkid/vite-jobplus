import React from "react";
import Container from "../components/container/container";
import Cookie from "../components/cookie/cookie";
import Footer from "../components/footer/footer";
import Login from "../components/login/login";
import HeroSimple from "../components/hero/hero_simple";
import ResetPssword from "../components/reset password/Reset_Password";

export default function ResetPasswordPage() {
  return (
    <>
      <section>
        <HeroSimple title="Reset password" />
        <Container>
          <ResetPssword />
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
