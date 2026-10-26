import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {projectId: 'ocp45god', dataset: 'production'},
  vite: (config) => ({
    ...config,
    server: {
      ...config.server,
      allowedHosts: true,
    },
  }),
})
