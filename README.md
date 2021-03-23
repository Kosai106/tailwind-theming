# [Easy Theming with TailwindCSS](https://youtu.be/GjYHK0TjN8c)

This example shows how to utilize [TailwindCSS](https://tailwindcss.com/) (v2) together with [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) in order to implement a very dynamic theming solution for your websites and applications.

I am using the new [`@tailwindcss/jit`](https://github.com/tailwindlabs/tailwindcss-jit) engine for TailwindCSS, although this is not a requirement to follow along.

Here's the list of files touched in order to achieve the result shown in the video:

```
root
├── hooks/
│   └── useTheme.js
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
└── tailwind.config.js
```

Thanks for watching.

[Kevin Østerkilde](https://oesterkilde.dk?ref=github)