import manifest from './src/dojo/generated/manifests/manifest.json'
import { createDojoConfig } from '@dojoengine/core'

// Uncomment to run locally
// const rpc_url = "http://localhost:5050/"
// const torii_url = "http://localhost:8080/graphql"

// Uncomment to run with Cartridge slots
const rpc_url = 'https://api.cartridge.gg/x/fitace/katana'
const torii_url = 'https://api.cartridge.gg/x/fitace/torii'


export const dojoConfig = createDojoConfig({
  manifest,
  rpcUrl: rpc_url,
  toriiUrl: torii_url,
})
