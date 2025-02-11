
import Footer from "@/components/Homepage/Footer";
import "./globals.css";
import NavBar from "@/components/Homepage/NavBar";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Utsav - Watch Free Movies",
  description: "Welcome to movies platform of Utsav",
};

export default function RootLayout({ children }) {
  return (

      <StoreProvider>
    <html lang="en">
      <body
        className={`mx-auto max-w-[1920px] overflow-x-hidden bg-black06   `}
      >
          <NavBar />
          {children}
          <Footer />
      </body>

    </html>
        </StoreProvider>

  );
}
