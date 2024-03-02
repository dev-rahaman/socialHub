import { Inter } from "next/font/google";
import "../globals.css";
import AuthProvider from "../Provider/AuthProvider";
import RightSidebar from "./FeedComponents/Sidebar/RightSidebar";
import FeedHeader from "./FeedComponents/FeedHeader";
import LeftSidebar from "./FeedComponents/Sidebar/LeftSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Hub",
  description: "Bangladesh all madrasa here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <main>
          <AuthProvider>
            <FeedHeader />
            <div className="mt-16 flex justify-between">
              <div className="fixed left-0">
                <LeftSidebar />
              </div>
              <div className="mx-2 lg:mx-[270px]">{children}</div>
              <div className="fixed right-0">
                <RightSidebar />
              </div>
            </div>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
