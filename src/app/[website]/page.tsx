import { redirect } from "next/navigation";

export default function WebsitePage({
  params,
}: {
  params: { website: string };
}) {
  redirect(`/${params.website}/1`);
}
