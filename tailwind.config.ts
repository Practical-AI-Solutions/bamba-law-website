import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#192033',
					50: '#f0f4f9',
					100: '#dce5ee',
					200: '#bccbdd',
					300: '#94a9c5',
					400: '#7187ae',
					500: '#546a96',
					600: '#43557a',
					700: '#35435f',
					800: '#2a334a',
					900: '#192033',
					950: '#0f1522',
				},
				secondary: {
					DEFAULT: '#d09f1c',
					50: '#fcf9eb',
					100: '#f7efc8',
					200: '#f0df8e',
					300: '#e9cb53',
					400: '#e3b930',
					500: '#d09f1c',
					600: '#b27c17',
					700: '#905a18',
					800: '#78471b',
					900: '#673d1a',
					950: '#3d200c',
				},
				accent: {
					DEFAULT: '#d09f1c',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neutral: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827',
					950: '#0a0f1a',
				},
				// Law firm color palette
				navy: {
					50: '#f0f4f9',
					100: '#dce5ee',
					200: '#bccbdd',
					300: '#94a9c5',
					400: '#7187ae',
					500: '#546a96',
					600: '#43557a',
					700: '#35435f',
					800: '#2a334a',
					900: '#192033',
					950: '#0f1522',
				},
				gold: {
					50: '#fcf9eb',
					100: '#f7efc8',
					200: '#f0df8e',
					300: '#e9cb53',
					400: '#e3b930',
					500: '#d09f1c',
					600: '#b27c17',
					700: '#905a18',
					800: '#78471b',
					900: '#673d1a',
					950: '#3d200c',
				},
				// New colors based on the logo
				maroon: {
					50: '#fbedee',
					100: '#f7d9dc',
					200: '#edb3b9',
					300: '#e08d96',
					400: '#d46773',
					500: '#c74150',
					600: '#a03440',
					700: '#792730',
					800: '#531a20',
					900: '#2c0d10',
					950: '#180608',
				},
				burgundy: {
					50: '#f4e9eb',
					100: '#e9d3d7',
					200: '#d3a8af',
					300: '#bd7c87',
					400: '#a7515f',
					500: '#912637',
					600: '#741e2c',
					700: '#571721',
					800: '#3a0f16',
					900: '#1d080b',
					950: '#0f0406',
				},
				cream: {
					50: '#fefefd',
					100: '#fdfcfa',
					200: '#faf9f5',
					300: '#f8f5f0',
					400: '#f5f2ea',
					500: '#f2eee5',
					600: '#c2bfb7',
					700: '#918f89',
					800: '#61605c',
					900: '#30302e',
					950: '#181817',
				},
				charcoal: {
					50: '#f2f2f2',
					100: '#e6e6e6',
					200: '#cccccc',
					300: '#b3b3b3',
					400: '#999999',
					500: '#808080',
					600: '#666666',
					700: '#4d4d4d',
					800: '#333333',
					900: '#1a1a1a',
					950: '#0d0d0d',
				},
			},
			fontFamily: {
				serif: ['Merriweather', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				fadeInRight: {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fadeIn': 'fadeIn 0.8s ease-out forwards',
				'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
				'fadeInLeft': 'fadeInLeft 0.8s ease-out forwards',
				'fadeInRight': 'fadeInRight 0.8s ease-out forwards',
			}
		}
	},
	plugins: [animate],
} satisfies Config;
