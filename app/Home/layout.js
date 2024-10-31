
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function HomeLayout({ children }) {
    return (
      <html suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class"
            themes={['light', 'dark', 'system']}
            defaultTheme="light"
          >
            <Nav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }
  