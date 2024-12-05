const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })

const path = require('path')
config.resolver.disableHierarchicalLookup = true
config.resolver.nodeModulesPaths = [path.resolve(__dirname, 'node_modules')]
