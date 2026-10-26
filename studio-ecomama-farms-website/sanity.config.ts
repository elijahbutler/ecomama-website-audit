import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'ecomama-farms-website',
  title: 'Ecomama Farms Website',
  projectId: 'ocp45god',
  dataset: 'production',
  plugins: [structureTool({
    structure: (S) => S.list().title('Website content').items([
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteSettings'),
      S.listItem().title('Site settings').id('siteSettings').child(
        S.document().schemaType('siteSettings').documentId('siteSettings'),
      ),
    ]),
  })],
  document: {
    newDocumentOptions: (options) => options.filter((option) => option.templateId !== 'siteSettings'),
    actions: (actions, context) => context.schemaType === 'siteSettings'
      ? actions.filter((action) => action.action !== 'duplicate' && action.action !== 'delete')
      : actions,
  },
  schema: {types: schemaTypes},
})
