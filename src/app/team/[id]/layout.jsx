import TeamHero from "@/components/TeamHero";
import { getInfoTeam } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | Teams",
};

export default async function TeamLayout({ children, params }) {
  const { id } = params;

  const infoTeam = await getInfoTeam({ idTeam: id });

  return (
    <main className="bg-green w-full bg-green-950 overflow-x-hidden">
      <TeamHero infoTeam={infoTeam} />

      {children}
    </main>
  );
}
