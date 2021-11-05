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
    slideTitle: `
        font-size: ${fontSizes[9]};
        line-height: ${lineHeights[9]}px;
        font-weight: ${fontWeights[1]};
    `,
    slideDescription: `
        font-size: ${fontSizes[2]};
        line-height: ${lineHeights[2]}px;
        font-weight: ${fontWeights[0]};
    `,
    sectionHeader: `
        font-size: ${fontSizes[4]};
        line-height: ${lineHeights[4]}px;
        font-weight: ${fontWeights[2]};
    `,
    categoryTitle: `
        font-size: ${fontSizes[3]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[1]};
    `,
    buttonText: `
        font-size: ${fontSizes[2]};
        line-height: ${lineHeights[2]}px;
        font-weight: ${fontWeights[4]};
    `,
    footerText: `
        font-size: ${fontSizes[2]};
        line-height: ${lineHeights[3]}px;
        font-weight: ${fontWeights[0]};
    `,





  /* titleMobile: `font-size: ${fontSizes[6]};
          font-weight: ${fontWeights[1]};
          line-height: ${lineHeights[6]}px;`,

  subtitleMobile: `font-size: ${fontSizes[4]};
            font-weight:${fontWeights[1]};
            line-height: ${lineHeights[4]}px;`,

  subtitle2Mobile: `font-size:  ${fontSizes[3]};
              font-weight: ${fontWeights[1]};
              line-height: ${lineHeights[3]}px;`,

  paragraph: `font-size: ${fontSizes[2]};
              font-weight: ${fontWeights[0]};
              line-height: ${lineHeights[2]}px;`,

  paragraphBold: `font-size: ${fontSizes[2]};
                  font-weight: ${fontWeights[1]};
                  line-height: ${lineHeights[2]}px;`,

  paragraphHyperlink: `font-size: ${fontSizes[2]};
                       font-weight:  ${fontWeights[1]};
                       line-height: ${lineHeights[2]}px;
                       text-decoration-line: underline;`,

  caption: `font-size:  ${fontSizes[1]};
            font-weight:  ${fontWeights[0]};
            line-height: ${lineHeights[1]}px;`,

  captionBold: `font-size: ${fontSizes[1]};
                font-weight: ${fontWeights[1]};
                line-height: ${lineHeights[1]}px;`,

  captionCrossed: `font-size:  ${fontSizes[1]};
                   font-weight:  ${fontWeights[0]};
                   line-height: ${lineHeights[1]}px;
                   text-decoration-line: line-through;`,

  micro: `font-size: ${fontSizes[0]};
          font-weight: ${fontWeights[0]};
          line-height:  ${lineHeights[0]}px;`,

  microBold: `font-size: ${fontSizes[0]};
              font-weight: ${fontWeights[1]};
              line-height: ${lineHeights[0]}px;`,

  microCrossed: `font-size: ${fontSizes[0]};
                 font-weight: ${fontWeights[0]};
                 line-height: ${lineHeights[0]}px;
                 text-decoration-line: line-through;`,

  titleDesktop: `font-size: ${fontSizes[8]};
                 font-weight: ${fontWeights[1]};
                 line-height: ${lineHeights[8]}px;`,

  subtitleDesktop: `font-size: ${fontSizes[7]};
                      font-weight: ${fontWeights[1]};
                      line-height: ${lineHeights[7]}px;
                   `,

  subtitle2Desktop: ` font-size: ${fontSizes[5]};
                      font-weight: ${fontWeights[1]};
                      line-height: ${lineHeights[5]}px;`,

  subtitle2DesktopQuote: `font-size ${fontSizes[5]};
                          font-weight: ${fontWeights[1]};
                          line-height: ${lineHeights[5]}px;
                          font-style: italic;`,

  subtitle2MobileQuote: `font-size:  ${fontSizes[3]};
              font-weight: ${fontWeights[1]};
              line-height: ${lineHeights[3]}px;
              font-style: italic;`, */
};