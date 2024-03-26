import "../app/globals.css";

export const metadata = {
  title: "Einzelwerk Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
