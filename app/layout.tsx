import localFont from "next/font/local";
import "../global.css";
import Navbar from "@/components/navigation/Navbar";

const TungstenBold = localFont({
  src: "./fonts/Tungsten-Bold.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        style={{
          backgroundImage: `url("/img/background.png")`,
          backgroundPosition: "center",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
        className={`${TungstenBold.className} h-full overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
