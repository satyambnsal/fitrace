import manifest from './src/dojo/generated/manifests/manifest.json'
import { createDojoConfig } from '@dojoengine/core'

export const dojoConfig = createDojoConfig({
  manifest,
})
