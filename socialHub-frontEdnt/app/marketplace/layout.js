import { Inter } from "next/font/google";
import FeedHeader from "../(feed)/FeedComponents/FeedHeader";
import "../globals.css";
import AuthProvider from "../Provider/AuthProvider";
import MarketplaceSidebar from "./MarketplaceComponents/MarketplaceSidebar";
import RightSidebar from "../(feed)/FeedComponents/Sidebar/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketplace",
  description: "Bangladesh all madrasa here",
};

export default function MarketplaceLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <main>
          <AuthProvider>
            <FeedHeader />
            <div className="mt-16 flex justify-between">
              <div className="fixed left-0">
                <MarketplaceSidebar />
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
