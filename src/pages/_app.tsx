import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/globalStyles";
import { FormDataProvider } from "@/contexts/FormDataContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormDataProvider>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </FormDataProvider>
  );
}
