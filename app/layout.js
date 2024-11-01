import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" themes={["light", "dark", "system"]} defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
