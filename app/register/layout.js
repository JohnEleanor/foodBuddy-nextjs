import { ThemeProvider } from "next-themes";

export default function RegisterLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" 
      themes={["light", "dark", "system"]}
      defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
