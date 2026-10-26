import {defineArrayMember, defineField, defineType} from 'sanity'

export const floralGallery = defineType({
  name: 'floralGallery',
  title: 'Floral gallery',
  type: 'document',
  fields: [
    defineField({name: 'season', title: 'Season', type: 'string', options: {list: ['Spring', 'Summer', 'Autumn', 'Winter']}, validation: (rule) => rule.required()}),
    defineField({name: 'cultivar', title: 'Cultivar / flower name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'notes', title: 'Notes', type: 'text'}),
    defineField({name: 'photos', title: 'Photos', type: 'array', of: [defineArrayMember({type: 'websiteImage'})], validation: (rule) => rule.required().min(1)}),
  ],
  preview: {select: {title: 'cultivar', subtitle: 'season'}},
})
