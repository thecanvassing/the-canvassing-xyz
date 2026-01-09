import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px", /* max-w-7xl */
      },
    },
    extend: {
      fontFamily: {
        sans: ["Sen", "sans-serif"],
      },
      fontSize: {
        /* Figma Typography Scale */
        "h1": ["36px", { lineHeight: "41px", letterSpacing: "0.5px", fontWeight: "800" }],
        "h3": ["24px", { lineHeight: "28px", letterSpacing: "0.5px", fontWeight: "500" }],
        "h3-regular": ["24px", { lineHeight: "28px", letterSpacing: "0.5px", fontWeight: "400" }],
        "h4": ["20px", { lineHeight: "28px", letterSpacing: "0.5px", fontWeight: "600" }],
        "h4-regular": ["20px", { lineHeight: "28px", letterSpacing: "0.5px", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "400" }],
        "body-lg-medium": ["16px", { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "24px", letterSpacing: "0.5px", fontWeight: "400" }],
        "body-sm": ["12px", { lineHeight: "20px", letterSpacing: "0.5px", fontWeight: "400" }],
      },
      letterSpacing: {
        "wide": "0.5px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          secondary: "hsl(var(--primary-secondary))",
          light: "hsl(var(--primary-light))",
          bg: "hsl(var(--primary-bg))",
          "bg-alt": "hsl(var(--primary-bg-alt))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          red: "hsl(var(--accent-red))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        yellow: {
          DEFAULT: "hsl(var(--yellow))",
          foreground: "hsl(var(--yellow-foreground))",
          light: "hsl(var(--yellow-light))",
        },
        gray: {
          dark: "hsl(var(--gray-dark))",
          medium: "hsl(var(--gray-medium))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          dark: "hsl(var(--cream-dark))",
        },
        "purple-light": "hsl(var(--purple-light))",
        "purple-soft": "hsl(var(--purple-soft))",
        footer: {
          bg: "hsl(var(--footer-bg))",
          foreground: "hsl(var(--footer-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "8px", /* Buttons */
        md: "6px",
        sm: "4px",
        xl: "12px", /* Cards */
        "2xl": "16px", /* Cards */
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        "card": "1px 1px 4px rgba(0,0,0,0.1), 1px 1px 0px rgba(0,0,0,0.02)",
        "elevated": "-1px 6px 15px rgba(0,0,0,0.2), 1px 1px 3px rgba(0,0,0,0.1)",
        "soft": "0 4px 12px rgba(0,0,0,0.08)",
        "glow": "0 0 40px hsl(276 82% 24% / 0.15)",
      },
      spacing: {
        /* Section spacing */
        "section": "80px", /* py-20 */
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;