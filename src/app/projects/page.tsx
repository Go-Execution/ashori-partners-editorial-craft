import type { Metadata } from "next";
import { SITE_INFO } from "@/data/site";
import { ProjectDossier } from "@/components/ProjectDossier";

export const metadata: Metadata = {
  title: `Project Dossier | ${SITE_INFO.name}`,
  description:
    "Architectural plates and specification index of completed Ashori Partners LLC renovations in Greater Boston.",
};

export default function ProjectsPage() {
  return (
    <div>
      <ProjectDossier />
    </div>
  );
}
