module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-foreground': 'rgb(var(--accent-foreground) / <alpha-value>)',
        destructive: 'rgb(var(--destructive) / <alpha-value>)',
        sidebar: 'rgb(var(--sidebar) / <alpha-value>)',
        'sidebar-border': 'rgb(var(--sidebar-border) / <alpha-value>)',
        'sidebar-foreground': 'rgb(var(--sidebar-foreground) / <alpha-value>)',
        'sidebar-accent': 'rgb(var(--sidebar-accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};