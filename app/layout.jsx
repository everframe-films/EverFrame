import "./globals.css";

export const metadata = {
  title: "EverFrame — Creative Growth Agency",
  description: "Apple-smooth creative agency website for EverFrame.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
