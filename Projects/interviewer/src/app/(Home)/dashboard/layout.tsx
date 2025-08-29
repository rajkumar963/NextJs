import Header from "@/components/CustomUi/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {/* Header */}
       <Header />
        {children}
    </>
  );
}
