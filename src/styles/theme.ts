import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        base: '0px',
        sm: '360px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
    },
    colors: {
        lime: {
            50: '#FFFFD3',
            100: '#EAFFC7',
            150: '#D7FF94',
            300: '#C4FF61',
            400: '#B1FF2E',
            600: '#2DB100',
            800: '#134B00',
        },
    },
    fonts: {
        body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, 
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, 
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
    },
    radii: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '16px',
        o: '50px',
    },
    borders: {
        card: '1px solid rgba(0, 0, 0, 0.08)',
        green: '1px solid #2db100',
    },
    components: {},
    styles: {
        global: {
            body: {
                bg: '#fff',
                color: '#000',
            },
        },
    },
});
