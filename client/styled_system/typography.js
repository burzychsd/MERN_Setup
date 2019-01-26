// FONT
export const fontPrimary = 'Space Mono, monospace'
export const fontSecondary = 'serif'

// LINE-HEIGHT
export const headingLineHeight = 1.2
export const bodyLineHeight = 1.4

// SIZES
export const baseSize = '1em'
export const scaleRatio = 1.2

export const textXs = (size, ratio) => `calc(${size ? size : baseSize} / ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio})`
export const textSm = (size, ratio) => `calc(${size} / ${ratio ? ratio : scaleRatio})`
export const textMd = (size, ratio) => `calc(${size} * ${ratio ? ratio : scaleRatio})`
export const textLg = (size, ratio) => `calc(${size} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio})`
export const textXl = (size, ratio) => `calc(${size} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio})`
export const textXxl = (size, ratio) => `calc(${size} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio})`
export const textXxxl = (size, ratio) => `calc(${size} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio} * ${ratio ? ratio : scaleRatio})`