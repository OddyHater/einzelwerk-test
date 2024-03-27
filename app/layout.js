import "../app/globals.css";
import { inter } from "./fonts";

export const metadata = {
  title: "Einzelwerk Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
