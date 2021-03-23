module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: ({ opacityVariable }) => `rgba(var(--accent) / var(${opacityVariable}))`,
        content: ({ opacityVariable }) => `rgba(var(--content) / var(${opacityVariable}))`,
        foreground: ({ opacityVariable }) => `rgba(var(--foreground) / var(${opacityVariable}))`,
        background: ({ opacityVariable }) => `rgba(var(--background) / var(${opacityVariable}))`,
        edge: ({ opacityVariable }) => `rgba(var(--edge) / var(${opacityVariable}))`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
