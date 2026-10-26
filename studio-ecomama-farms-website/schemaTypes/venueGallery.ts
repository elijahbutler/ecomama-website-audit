import {defineArrayMember, defineField, defineType} from 'sanity'

export const venueGallery = defineType({
  name: 'venueGallery',
  title: 'Venue gallery',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (rule) => rule.required()}),
    defineField({name: 'location', title: 'Location', type: 'string', options: {list: [
      'Heart of the Rose Garden', 'Terraced Lawn', 'Rose Barn', 'Mountain View Barn',
      'Bridal Loft', "Groomsmen's Cottage", 'Willow Pond', 'Other',
    ]}, validation: (rule) => rule.required()}),
    defineField({name: 'images', title: 'Images', type: 'array', of: [defineArrayMember({type: 'websiteImage'})], validation: (rule) => rule.required().min(1)}),
  ],
})
