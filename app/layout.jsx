import "@styles/globals.css";

export const metadata = {
  title: "Promptadise",
  description: "Discover and share best AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <div className="background">
          <div className="background__gradient" />
        </div>
        <main className="app">{children}</main>
      </head>
    </html>
  );
};

export default RootLayout;
