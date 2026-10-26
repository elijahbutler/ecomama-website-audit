import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({name: 'announcementEnabled', title: 'Announcement enabled', type: 'boolean', initialValue: false}),
    defineField({name: 'announcement', title: 'Announcement', type: 'text', validation: (rule) => rule.custom((value, context) =>
      context.document?.announcementEnabled && !value?.trim() ? 'Enter an announcement before enabling the banner.' : true,
    )}),
  ],
  preview: {prepare: () => ({title: 'Site settings'})},
})
