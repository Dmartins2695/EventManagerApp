const baseColors = {
  primary: 'rgb(160, 65, 0)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(255, 219, 204)',
  onPrimaryContainer: 'rgb(53, 16, 0)',
  secondary: 'rgb(118, 87, 73)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(255, 219, 204)',
  onSecondaryContainer: 'rgb(44, 22, 11)',
  tertiary: 'rgb(101, 95, 49)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(237, 228, 169)',
  onTertiaryContainer: 'rgb(31, 28, 0)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
}

const lightColors = {
  ...baseColors,
  background: 'rgb(255, 251, 255)',
  onBackground: 'rgb(32, 26, 24)',
  surface: 'rgb(255, 251, 255)',
  onSurface: 'rgb(32, 26, 24)',
  surfaceVariant: 'rgb(244, 222, 213)',
  onSurfaceVariant: 'rgb(82, 68, 61)',
  outline: 'rgb(133, 115, 108)',
}

const darkColors = {
  ...baseColors,
  primary: 'rgb(255, 182, 147)',
  onPrimary: 'rgb(86, 32, 0)',
  background: 'rgb(32, 26, 24)',
  onBackground: 'rgb(237, 224, 219)',
  surface: 'rgb(32, 26, 24)',
  onSurface: 'rgb(237, 224, 219)',
  surfaceVariant: 'rgb(82, 68, 61)',
  onSurfaceVariant: 'rgb(215, 194, 185)',
  outline: 'rgb(160, 141, 133)',
}

export const lightTheme = {
  colors: lightColors,
  elevation: {
    level0: 'transparent',
    level1: 'rgb(250, 242, 242)',
    level2: 'rgb(247, 236, 235)',
    level3: 'rgb(245, 231, 227)',
    level4: 'rgb(244, 229, 224)',
    level5: 'rgb(242, 225, 219)',
  },
}

export const darkTheme = {
  colors: darkColors,
  elevation: {
    level0: 'transparent',
    level1: 'rgb(43, 34, 30)',
    level2: 'rgb(50, 39, 34)',
    level3: 'rgb(57, 43, 38)',
    level4: 'rgb(59, 45, 39)',
    level5: 'rgb(63, 48, 41)',
  },
}

export const tailwindColors = {
  light: {
    primary: lightColors.primary,
    background: lightColors.background,
    surface: lightColors.surface,
    secondary: lightColors.secondary,
    onPrimary: lightColors.onPrimary,
    onBackground: lightColors.onBackground,
    onSurface: lightColors.onSurface,
  },
  dark: {
    primary: darkColors.primary,
    background: darkColors.background,
    surface: darkColors.surface,
    secondary: darkColors.secondary,
    onPrimary: darkColors.onPrimary,
    onBackground: darkColors.onBackground,
    onSurface: darkColors.onSurface,
  },
}
