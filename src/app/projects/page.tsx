// app/projects/page.tsx
import Project from './project'; // import the client component
import { baseURL } from "@/app/resources";
import { about, person, projects } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(projects.title)}`,
    path: projects.path,
  });
}

export default function Page() {
  return <Project />;
}
