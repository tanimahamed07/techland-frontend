import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import { getCategoryTree } from "@/service/category.service";
import AIChatWidget from "@/components/ai/AIChatWidget";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  let initialCategories = [];
  try {
    const data = await getCategoryTree();
    initialCategories = data?.data || [];
  } catch (error) {
    console.error("Failed to fetch categories in Layout:", error);
  }

  return (
    <div className="relative min-h-screen">
      {/* সার্ভার থেকে ক্যাটাগরি ডাটা পাঠানো হচ্ছে */}
      <Navbar initialCategories={initialCategories} />

      <main>{children}</main>

      {/* ক্লায়েন্ট উইজেট */}
      <AIChatWidget />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
