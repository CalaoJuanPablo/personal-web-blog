import { draftMode } from 'next/headers'
import { createDirectus, rest, staticToken } from '@directus/sdk'
import type { Schema } from '@/types/directus'

const DIRECTUS_URL = process.env.DIRECTUS_URL
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN

if (!DIRECTUS_URL || !DIRECTUS_TOKEN) {
  throw new Error(
    'Missing required environment variables: DIRECTUS_URL, DIRECTUS_TOKEN'
  )
}

export const directus = createDirectus<Schema>(DIRECTUS_URL)
  .with(staticToken(DIRECTUS_TOKEN))
  .with(rest())

export const getIsPreviewMode = async () => {
  const { isEnabled } = await draftMode()

  return isEnabled || process.env.NODE_ENV !== 'production'
}
