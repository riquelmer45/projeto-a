import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DeshboardMain from "./MainContente";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <DeshboardMain session={session} />
    </div>
  );
}