type ResponsiveFontSizesInput = {
   sm: number;
   md: number;
   lg: number;
};

type ResponsiveFontSizesOutput = {
   "@media (min-width:600px)": { fontSize: string };
   "@media (min-width:900px)": { fontSize: string };
   "@media (min-width:1200px)": { fontSize: string };
};

type TypographyVariant = {
   fontWeight: number;
   fontSize: string;
   lineHeight: number | string;
} & ResponsiveFontSizesOutput;

type Typography = {
   fontFamily: string;
   fontWeightRegular: number;
   fontWeightMedium: number;
   fontWeightBold: number;
   h1: TypographyVariant;
   h2: TypographyVariant;
   h3: TypographyVariant;
   h4: TypographyVariant;
   h5: TypographyVariant;
   h6: TypographyVariant;
   subtitle1: Omit<TypographyVariant, keyof ResponsiveFontSizesOutput>;
   subtitle2: Omit<TypographyVariant, keyof ResponsiveFontSizesOutput>;
};

export function remToPx(value: string): number {
   return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number): string {
   return `${value / 16}rem`;
}

export function responsiveFontSizes({
   sm,
   md,
   lg,
}: ResponsiveFontSizesInput): ResponsiveFontSizesOutput {
   return {
      "@media (min-width:600px)": {
         fontSize: pxToRem(sm),
      },
      "@media (min-width:900px)": {
         fontSize: pxToRem(md),
      },
      "@media (min-width:1200px)": {
         fontSize: pxToRem(lg),
      },
   };
}

const typography: Typography = {
   fontFamily: ["Poppins", "Montserrat"].join(","),
   fontWeightRegular: 300,
   fontWeightMedium: 500,
   fontWeightBold: 600,
   h1: {
      fontWeight: 700,
      fontSize: pxToRem(58),
      lineHeight: pxToRem(97.52),
      ...responsiveFontSizes({ sm: 44, md: 58, lg: 58 }),
   },
   h2: {
      fontWeight: 600,
      fontSize: pxToRem(46),
      lineHeight: 1.1,
      ...responsiveFontSizes({ sm: 38, md: 46, lg: 46 }),
   },
   h3: {
      fontWeight: 600,
      fontSize: pxToRem(38),
      lineHeight: 1.1,
      ...responsiveFontSizes({ sm: 32, md: 38, lg: 38 }),
   },
   h4: {
      fontWeight: 400,
      fontSize: pxToRem(28),
      lineHeight: 1.1,
      ...responsiveFontSizes({ sm: 24, md: 28, lg: 28 }),
   },
   h5: {
      fontWeight: 500,
      fontSize: pxToRem(22),
      lineHeight: 1.1,
      ...responsiveFontSizes({ sm: 18, md: 22, lg: 22 }),
   },
   h6: {
      fontWeight: 400,
      fontSize: pxToRem(22),
      lineHeight: 1.1,
      ...responsiveFontSizes({ sm: 18, md: 22, lg: 22 }),
   },
   subtitle1: {
      fontWeight: 400,
      fontSize: pxToRem(20),
      lineHeight: 1.1,
   },
   subtitle2: {
      fontWeight: 400,
      fontSize: pxToRem(18),
      lineHeight: 22 / 14,
   },
};

export default typography;
