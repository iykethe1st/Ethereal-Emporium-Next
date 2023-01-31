import "@/styles/globals.css";
import { useEffect } from "react";
// import "../../dist/output.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  const nft = {
    id: {},
  };
  console.log();
  return <Component {...pageProps} />;
}
