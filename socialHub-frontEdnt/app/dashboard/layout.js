import AuthProvider from "../Provider/AuthProvider";
import "../globals.css";
import DashboardSidebar from "./DashboardComponents/DashboardSidebar";

export const metadata = {
  title: "SocialHub Dashboard",
  description: "Bangladesh all madrasa here",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <AuthProvider>
            <div className="flex items-center justify-center">
              <DashboardSidebar />
              <div className="ms-[270px]">{children}</div>
            </div>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
