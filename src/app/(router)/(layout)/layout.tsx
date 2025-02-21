import Footer from "../../../widgets/home/footer";
import Header from "../../../widgets/home/header";


export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="px-8">{children}</main>
      <Footer />
    </>
  );
}
