import { Providers } from "./providers";
import "./globals.css";
import ShowNavbar from "./showNavbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ShowNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
