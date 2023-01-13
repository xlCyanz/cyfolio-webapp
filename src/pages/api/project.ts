import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = "cyfolio";

    const projectPath = path.join(process.cwd(), "public", "projects", slug);
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

    const image = projectImage ? `/projects/${slug}/${projectImage}` : null;

    res.status(200).json({
      data: {
        spanishVersion: { ...dataSpanish, image, description: contentSpanish },
        englishVersion: {
          ...dataEnglish,
          image,
          description: contentEnglish,
        },
      },
    });
  } catch (error) {
    res.status(400).json({ data: null });
  }
}
