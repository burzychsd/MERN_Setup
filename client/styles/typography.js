// FONT
export const fontPrimary = 'Space Mono, monospace'
export const fontSecondary = 'serif'

// SIZES
export const textBaseSize = '1em'
export const textScaleRatio = 1.2

export const textXs = (textBaseSize, textScaleRatio) => `calc(${textBaseSize} / ${textScaleRatio} * ${textScaleRatio})`
export const textSm = (textBaseSize, textScaleRatio) => `calc(${textBaseSize} / ${textScaleRatio})`
export const textMd = (textBaseSize, textScaleRatio) => `calc(${textBaseSize} * ${textScaleRatio})`
export const textLg = (textBaseSize, textScaleRatio) => `calc(${textBaseSize} * ${textScaleRatio} * ${textScaleRatio})`
export const textXl = (textBaseSize, textScaleRatio) => `calc(${textBaseSize} * ${textScaleRatio} * ${textScaleRatio} * ${textScaleRatio})`
export const textXxl = (textBaseSize, textScaleRatio) => `calc(${textBaseSize} * ${textScaleRatio} * ${textScaleRatio} * ${textScaleRatio} * ${textScaleRatio})`
export const textXxxl = (textBaseSize, textScaleRatio) => `calc(${textBaseSize} * ${textScaleRatio} * ${textScaleRatio} * ${textScaleRatio} * ${textScaleRatio} * ${textScaleRatio})`

// LINE-HEIGHT
export const headingLineHeight = 1.2
export const bodyLineHeight = 1.4