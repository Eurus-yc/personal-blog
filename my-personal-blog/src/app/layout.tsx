import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eurus.blog'),
  title: "我的个人博客",
  description: "分享我的想法和经验，包括技术、生活和其他有趣的话题",
  keywords: ["博客", "技术", "编程", "生活", "经验分享"],
  authors: [{ name: "Eurus" }],
  creator: "Eurus",
  publisher: "Eurus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.eurus.blog",
    siteName: "Eurus的个人博客",
    title: "我的个人博客 - 分享技术与生活",
    description: "分享我的想法和经验，包括技术、生活和其他有趣的话题",
  },
  twitter: {
    card: "summary_large_image",
    title: "我的个人博客 - 分享技术与生活",
    description: "分享我的想法和经验，包括技术、生活和其他有趣的话题",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
