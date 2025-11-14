import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Hero title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Hero subtitle',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Hero image',
      type: 'upload',
      relationTo: 'photos',
      required: true,
    },
  ],
}
