import type { CollectionConfig } from 'payload'

export const Photos: CollectionConfig = {
  slug: 'photos',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'photos',
    mimeTypes: ['image/*'],
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'center',
      },
      {
        name: 'mobil',
        width: 680,
        height: undefined,
        position: 'center',
      },
      {
        name: 'widescreen',
        width: 2048,
        height: 1365,
        position: 'center',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
