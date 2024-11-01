
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
      
        <ThemeProvider attribute="class" themes={["light", "dark", "system"]} defaultTheme="light">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
