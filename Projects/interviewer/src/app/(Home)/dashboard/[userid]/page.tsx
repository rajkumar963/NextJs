import CallPage from "@/components/CustomUi/CallPage";

export default async function UserID({params}: RouteParams) {
 const { userid } = await params;
  return (
    <div>
      <CallPage />
    </div>
  )
}
