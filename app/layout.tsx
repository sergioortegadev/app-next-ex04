import Footer from "./components/Footer";
import { montserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased min-h-screen flex flex-col justify-between`}>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
