import { isAuthenticated } from "@/lib/action/auth.action";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const isUserAuthenticated = await isAuthenticated();
 if (isUserAuthenticated) redirect("/dashboard");
  return (
    <>
        {children}
    </>
  );
}
