
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider"

export default function HomeLayout({ children }) {
    return (
      <html lang="en" >
        <body>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }
  