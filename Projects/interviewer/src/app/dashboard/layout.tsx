import Header from "@/components/CustomUi/Header";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/action/auth.action";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const isUserAuthenticated = await isAuthenticated();
   if (!isUserAuthenticated) redirect("/");
  
  return (
    <>
    {/* Header */}
       <Header />
        {children}
    </>
  );
}
