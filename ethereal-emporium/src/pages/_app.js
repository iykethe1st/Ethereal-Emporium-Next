import "@/styles/globals.css";
import "animate.css";
import auth from "@/services/authService";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SignUp from "./sign-up";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const user = auth.getCurrentUser();
    setCurrentUser(user);
  }, []);
  return (
    <>
      <Navbar user={currentUser} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
