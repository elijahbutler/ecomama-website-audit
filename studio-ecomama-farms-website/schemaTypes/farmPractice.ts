import {defineArrayMember, defineField, defineType} from 'sanity'

export const farmPractice = defineType({
  name: 'farmPractice',
  title: 'Farm practice',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', validation: (rule) => rule.required()}),
    defineField({name: 'category', title: 'Category', type: 'string', options: {list: ['Compost', 'Beneficials', 'Heritage Animals', 'Orchard', 'Water']}, validation: (rule) => rule.required()}),
    defineField({name: 'photos', title: 'Photos', type: 'array', of: [defineArrayMember({type: 'websiteImage'})], validation: (rule) => rule.required().min(1)}),
  ],
})
