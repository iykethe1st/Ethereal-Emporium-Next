import { useEffect } from "react";
import { useRouter } from "next/router";
import auth from "@/services/authService";

const Logout = () => {
  const location = useRouter();
  useEffect(() => {
    auth.logout();
    location.push("/");
  }, []);
  return null;
};

export default Logout;
