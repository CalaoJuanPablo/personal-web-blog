import { directus } from "../directus";
import { readFile } from "@directus/sdk";

const DIRECTUS_URL = process.env.DIRECTUS_URL!;

interface AssetOptions {
  width?: number;
  height?: number;
  fit?: "cover" | "contain" | "inside" | "outside";
  quality?: number;
  format?: "jpg" | "png" | "webp" | "gif";
}

/**
 * Get full URL for an asset by file ID with optional transformations
 */
export function getAssetUrl(fileId: string, options?: AssetOptions): string {
  const params = new URLSearchParams();

  if (options?.width) params.set("width", options.width.toString());
  if (options?.height) params.set("height", options.height.toString());
  if (options?.fit) params.set("fit", options.fit);
  if (options?.quality) params.set("quality", options.quality.toString());
  if (options?.format) params.set("format", options.format);

  const queryString = params.toString();
  return `${DIRECTUS_URL}/assets/${fileId}${queryString ? `?${queryString}` : ""}`;
}

/**
 * Get file metadata by ID
 */
export async function getFileById(fileId: string) {
  return await directus.request(readFile(fileId));
}
