import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyMobileBar from "./StickyMobileBar";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
