import {defineField, defineType} from 'sanity'

export const websiteImage = defineType({
  name: 'websiteImage',
  title: 'Website image',
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required(), description: 'Describe the image for someone who cannot see it.'}),
    defineField({name: 'caption', title: 'Caption', type: 'string'}),
    defineField({name: 'photographerCredit', title: 'Photographer credit', type: 'string'}),
  ],
})
