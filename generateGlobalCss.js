const fs = require('fs')
const path = require('path')
const { lightTheme } = require('./theme') // Import your theme file

// Function to generate shades from a base RGB color
const generateShades = rgb => {
  const [r, g, b] = rgb.match(/\d+/g).map(Number)
  const shades = {}

  // Generate lighter shades (100 to 400)
  for (let i = 1; i <= 4; i++) {
    const factor = (5 - i) / 5 // Lighten progressively towards 100
    shades[100 * i] =
      `${Math.round(r + (255 - r) * factor)}, ${Math.round(g + (255 - g) * factor)}, ${Math.round(b + (255 - b) * factor)}`
  }

  // Generate darker shades (600 to 900)
  for (let i = 1; i <= 4; i++) {
    const factor = i / 5 // Darken progressively towards 900
    shades[500 + 100 * i] =
      `${Math.round(r * (1 - factor))}, ${Math.round(g * (1 - factor))}, ${Math.round(b * (1 - factor))}`
  }

  return shades
}

// Generate the global CSS content
const generateGlobalCSS = colors => {
  let css =
    '@tailwind base;\n' +
    '@tailwind components;\n' +
    '@tailwind utilities;\n\n:root {\n'

  for (const [key, value] of Object.entries(colors)) {
    if (!value.startsWith('rgb')) continue // Skip non-RGB colors
    const shades = generateShades(value)

    for (const [shade, shadeValue] of Object.entries(shades)) {
      if (key.startsWith('on')) {
        break
      }
      css += `  --color-${key}-${shade}: ${shadeValue};\n`
    }
    // Add the default 500-level color
    css += `  --color-${key}-500: ${value.match(/\d+, \d+, \d+/)};\n`
  }

  css += '}\n'

  /*css += '.dark {\n'
  for (const [key, value] of Object.entries(colors)) {
    if (!value.startsWith('rgb')) continue // Skip non-RGB colors
    const shades = generateShades(value) // Generate dark mode shades
    for (const [shade, shadeValue] of Object.entries(shades)) {
      if (key.startsWith('on')) {
        break
      }
      css += `  --color-${key}-${shade}: ${shadeValue};\n`
    }
    css += `  --color-${key}-500: ${value.match(/\d+, \d+, \d+/)};\n`
  }
  css += '}\n'*/

  return css
}

// Main function to generate and write the CSS file
const main = () => {
  const cssContent = generateGlobalCSS(lightTheme.colors)
  const outputPath = path.resolve(__dirname, 'global.css')

  fs.writeFileSync(outputPath, cssContent, 'utf8')
  console.log('global.css updated successfully at:', outputPath)
}

// Run the script
main()
