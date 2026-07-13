import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyMobileBar from "./StickyMobileBar";
import GlobalReveal from "./GlobalReveal";

export default function Layout({ children }) {
  return (
    <>
      <GlobalReveal />
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
