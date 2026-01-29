/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '768px',   // Tablet
        'lg': '1280px',  // Desktop
        'xl': '1920px',  // Wide / 4K
      },
      colors: {
        // Variáveis semânticas (MAPEADAS DO FIGMA MCP)
        primary: {
          DEFAULT: 'var(--color-primary)', // #D7FF00 - Verde-limão
          dark: 'var(--color-primary-dark)', // #c4e703 - Verde-limão escuro
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // #060A11 - Quase preto
          light: 'var(--color-secondary-light)', // #E7E8EA - Cinza claro
        },
        success: 'var(--color-success)', // #15be78
        error: 'var(--color-error)', // #e61e32
        warning: 'var(--color-warning)',
        info: 'var(--color-info)', // #2a89ef
        bg: {
          DEFAULT: 'var(--color-bg)', // #FFFFFF
          secondary: 'var(--color-bg-secondary)', // #F5F6F8
        },
        text: {
          primary: 'var(--color-text-primary)', // #060A11
          secondary: 'var(--color-text-secondary)', // #9ca3af
        },
        border: {
          DEFAULT: 'var(--color-border)', // #e5e7eb
          hover: 'var(--color-border-hover)', // #d1d5db
        },
        // Variáveis primitivas (serão mapeadas do Figma)
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        lime: {
          50: 'var(--lime-50)',
          100: 'var(--lime-100)',
          200: 'var(--lime-200)',
          300: 'var(--lime-300)',
          400: 'var(--lime-400)',
          500: 'var(--lime-500)',
          600: 'var(--lime-600)',
          700: 'var(--lime-700)',
          800: 'var(--lime-800)',
          900: 'var(--lime-900)',
        },
      },
      spacing: {
        // Variáveis semânticas
        container: 'var(--spacing-container)',
        section: 'var(--spacing-section)',
        card: 'var(--spacing-card)',
        page: 'var(--spacing-page)',
        // Variáveis primitivas (EXTRAÍDAS DO FIGMA MCP)
        xs: 'var(--spacing-xs)', // 8px
        sm: 'var(--spacing-sm)', // 12px
        md: 'var(--spacing-md)', // 16px
        lg: 'var(--spacing-lg)', // 20px
        xl: 'var(--spacing-xl)', // 24px
        '2xl': 'var(--spacing-2xl)', // 32px
        '3xl': 'var(--spacing-3xl)', // 56px
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      fontSize: {
        xs: ['var(--font-size-xs)', 'var(--line-height-xs)'], // 12px / 16px
        sm: ['var(--font-size-sm)', 'var(--line-height-sm)'], // 14px / 20px
        base: ['var(--font-size-base)', 'var(--line-height-sm)'], // 16px / 20px
        lg: ['var(--font-size-lg)', 'var(--line-height-base)'], // 18px / 24px
        xl: ['var(--font-size-xl)', 'var(--line-height-lg)'], // 20px / 28px
        '2xl': ['var(--font-size-2xl)', 'var(--line-height-xl)'], // 24px / 32px
        '3xl': ['var(--font-size-3xl)', 'var(--line-height-2xl)'], // 28px / 36px
      },
      lineHeight: {
        xs: 'var(--line-height-xs)', // 16px
        sm: 'var(--line-height-sm)', // 20px
        base: 'var(--line-height-base)', // 24px
        lg: 'var(--line-height-lg)', // 28px
        xl: 'var(--line-height-xl)', // 32px
        '2xl': 'var(--line-height-2xl)', // 36px
      },
    },
  },
  plugins: [],
}
