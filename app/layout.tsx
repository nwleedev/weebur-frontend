import type { Metadata } from "next";
import "./globals.css";
import TanstackQueryProvider from "./providers/QueryClient";

export const metadata: Metadata = {
  title: "WEEBUR 프론트엔드 과제",
  description: "WEEBUR 프론트엔드 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
