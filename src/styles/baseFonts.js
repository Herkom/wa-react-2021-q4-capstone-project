const rem = true;

const fontSizesPx = [
    '8px',
    '12px',
    '16px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '40px',
    '48px',
];

const fontSizesRem = [
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.25.rem',
    '2.5rem',
    '3rem',
];

const fontSizes = rem ? fontSizesRem : fontSizesPx;
const fontWeights = [400, 600, 800];
const lineHeights = [10, 15, 20, 24, 29, 34, 39, 43, 48, 58];

export const fontTypes = {
    brandName: `
        font-size: ${fontSizes[3]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[2]};
    `,
    titleDesktop: `
        font-size: ${fontSizes[9]};
        line-height: ${lineHeights[9]}px;
        font-weight: ${fontWeights[1]};
    `,
    titleMobile: `
        font-size: ${fontSizes[6]};
        line-height: ${lineHeights[6]}px;
        font-weight: ${fontWeights[1]};
    `,
    subtitleDesktop: `
        font-size: ${fontSizes[5]};
        line-height: ${lineHeights[5]}px;
        font-weight: ${fontWeights[2]};
    `,
    subtitleMobile:`
        font-size: ${fontSizes[3]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[2]};
    `,
    subtitle2Desktop: `
        font-size: ${fontSizes[3]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[2]};
    `,
    subtitle2Mobile: `
        font-size: ${fontSizes[3]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[2]};
    `,
    subtitle2DesktopQuote: `
        font-size: ${fontSizes[3]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[1]};
        font-style: italic;
    `,
    subtitle2MobileQuote: `
        font-size: ${fontSizes[3]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[1]};
        font-style: italic;
    `,
    paragraph: `
        font-size: ${fontSizes[2]};
        line-height: ${lineHeights[2]}px;
        font-weight: ${fontWeights[0]};
    `,
    paragraphBold: `
        font-size: ${fontSizes[2]};
        line-height: ${lineHeights[2]}px;
        font-weight: ${fontWeights[2]};
    `,
    paragraphHyperlink: `
        font-size: ${fontSizes[2]};
        line-height: ${lineHeights[2]}px;
        font-weight: ${fontWeights[2]};
        text-decoration-line: underline;
    `,
    caption: `
        font-size:  ${fontSizes[1]};
        line-height: ${lineHeights[1]}px;
        font-weight:  ${fontWeights[1]};
    `,
    captionBold: `
        font-size: ${fontSizes[1]};
        line-height: ${lineHeights[1]}px;
        font-weight: ${fontWeights[2]};
    `,
    captionCrossed: `
        font-size:  ${fontSizes[1]};
        line-height: ${lineHeights[1]}px;
        font-weight:  ${fontWeights[0]};
        text-decoration-line: line-through;
    `,
    micro: `
        font-size: ${fontSizes[0]};
        line-height:  ${lineHeights[0]}px;
        font-weight: ${fontWeights[1]};
    `,
    microBold: `
        font-size: ${fontSizes[0]};
        line-height: ${lineHeights[0]}px;
        font-weight: ${fontWeights[2]};
    `,
    microCrossed: `
        font-size: ${fontSizes[0]};
        line-height: ${lineHeights[0]}px;
        font-weight: ${fontWeights[0]};
        text-decoration-line: line-through;`,
};