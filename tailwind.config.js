module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    plugins: [require("@tailwindcss/forms")],
};
