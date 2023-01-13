import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projectsPath = path.join(process.cwd(), "public", "projects");
    const projectsFolder = fs.readdirSync(projectsPath);

    const projects = projectsFolder.map((folderName) => {
      const projectPath = `${projectsPath}/${folderName}`;
      const files = fs.readdirSync(projectPath);

      const projectEnglish = files.filter((value) => value.endsWith("en.md"));
      const projectSpanish = files.filter((value) => value.endsWith("es.md"));
      const projectImage = files.find((value) =>
        value.match(/\.(jpg|jpeg|png|gif)$/),
      );

      const fileContentEnglish = fs.readFileSync(
        `${projectPath}/${projectEnglish}`,
        "utf-8",
      );
      const { data: dataEnglish, content: contentEnglish } =
        matter(fileContentEnglish);

      const fileContentSpanish = fs.readFileSync(
        `${projectPath}/${projectSpanish}`,
        "utf-8",
      );

      const { data: dataSpanish, content: contentSpanish } =
        matter(fileContentSpanish);

      const image = projectImage
        ? `/projects/${folderName}/${projectImage}`
        : null;

      return {
        spanishVersion: { ...dataSpanish, image, description: contentSpanish },
        englishVersion: {
          ...dataEnglish,
          image,
          description: contentEnglish,
        },
      };
    });
    res.status(200).json({ data: projects });
  } catch (error) {
    res.status(400).json({ data: null });
  }
}
