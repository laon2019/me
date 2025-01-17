import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}", 
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
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
        hideAndSeek: {
          '0%': {
            transform: 'translateY(4rem)'
          },
          '100%': {
            transform: 'translateY(0rem)'
          }
        },
        macbookRotate: {
          '0%, 100%': {
            transform: 'rotateX(-20deg) rotateY(0deg) rotateZ(0deg)'
          },
          '5%': {
            transform: 'rotateX(-20deg) rotateY(-20deg) rotateZ(0deg)'
          },
          '20%': {
            transform: 'rotateX(30deg) rotateY(200deg) rotateZ(0deg)'
          },
          '25%': {
            transform: 'rotateX(-60deg) rotateY(150deg) rotateZ(0deg)'
          },
          '60%': {
            transform: 'rotateX(-20deg) rotateY(130deg) rotateZ(0deg)'
          },
          '65%': {
            transform: 'rotateX(-20deg) rotateY(120deg) rotateZ(0deg)'
          },
          '80%': {
            transform: 'rotateX(-20deg) rotateY(375deg) rotateZ(0deg)'
          },
          '85%': {
            transform: 'rotateX(-20deg) rotateY(357deg) rotateZ(0deg)'
          },
          '87%': {
            transform: 'rotateX(-20deg) rotateY(360deg) rotateZ(0deg)'
          }
        },
        lidScreen: {
          '0%, 100%': {
            transform: 'rotateX(0deg)',
            backgroundPosition: 'left bottom'
          },
          '5%': {
            transform: 'rotateX(50deg)',
            backgroundPosition: 'left bottom'
          },
          '20%': {
            transform: 'rotateX(-90deg)',
            backgroundPosition: '-150px top'
          },
          '25%': {
            transform: 'rotateX(15deg)',
            backgroundPosition: 'left bottom'
          },
          '30%': {
            transform: 'rotateX(-5deg)',
            backgroundPosition: 'right top'
          },
          '38%': {
            transform: 'rotateX(5deg)',
            backgroundPosition: 'right top'
          },
          '48%, 90%': {
            transform: 'rotateX(0deg)',
            backgroundPosition: 'right top'
          }
        },
        screenShade: {
          '0%, 100%': {
            backgroundPosition: '-20px 0px'
          },
          '5%': {
            backgroundPosition: '-40px 0px'
          },
          '20%': {
            backgroundPosition: '200px 0'
          },
          '50%': {
            backgroundPosition: '-200px 0'
          },
          '80%': {
            backgroundPosition: '0px 0px'
          },
          '85%': {
            backgroundPosition: '-30px 0'
          },
          '90%': {
            backgroundPosition: '-20px 0'
          }
        },
        shadow: {
          '0%, 100%': {
            transform: 'rotateX(80deg) rotateY(0deg) rotateZ(0deg)',
            boxShadow: '0 0 60px 40px rgba(0,0,0,0.3)'
          },
          '5%': {
            transform: 'rotateX(80deg) rotateY(10deg) rotateZ(0deg)',
            boxShadow: '0 0 60px 40px rgba(0,0,0,0.3)'
          },
          '20%': {
            transform: 'rotateX(30deg) rotateY(-20deg) rotateZ(-20deg)',
            boxShadow: '0 0 50px 30px rgba(0,0,0,0.3)'
          },
          '25%': {
            transform: 'rotateX(80deg) rotateY(-20deg) rotateZ(50deg)',
            boxShadow: '0 0 35px 15px rgba(0,0,0,0.1)'
          },
          '60%': {
            transform: 'rotateX(80deg) rotateY(0deg) rotateZ(-50deg) translateX(30px)',
            boxShadow: '0 0 60px 40px rgba(0,0,0,0.3)'
          }
        },
        grid: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        hideAndSeek: 'hideAndSeek 1s alternate infinite cubic-bezier(0.86, 0, 0.07, 1)',
        macbookRotate: 'macbookRotate 7s ease infinite',
        lidScreen: 'lidScreen 7s ease infinite',
        screenShade: 'screenShade 7s ease infinite',
        shadow: 'shadow 7s ease infinite',
        keys: 'keys 7s ease infinite',
        keyboardArea: 'keyboardArea 7s ease infinite',
        lidMacbody: 'lidMacbody 7s ease infinite',
        grid: 'grid 15s linear infinite',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
