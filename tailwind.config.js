module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
