import TeamHero from "@/components/TeamHero";
import { getInfoTeam } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | Team",
};

export default async function TeamLayout({ children, params }) {
  const { id } = params;

  const infoTeam = await getInfoTeam({ idTeam: id });

  return (
    <main className="w-full bg-black">
      <TeamHero infoTeam={infoTeam} />

      {children}
    </main>
  );
}
