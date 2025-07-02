import { db } from "@/lib/db";
import { ModernMinimalistTemplate } from "@/components/templates/modern-minimalist";

const templateMap = {
  "modern-minimalist": ModernMinimalistTemplate,
};
interface Props {
  params: {
    id: string;
  };
}
export default async function InvitationPage({ params }: Props) {
  const invitation = await db.invitation.findUnique({
    where: { id: params.id },
  });

  if (!invitation) return <div>Not Found</div>;

  return <ModernMinimalistTemplate data={invitation} />;
}
