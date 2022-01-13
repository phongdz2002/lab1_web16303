module.exports = {
    content: ["*.html", "./src/**/*.{html,js}"],

    theme: {
        extend: {
            keyframes: {
                doiMau: {
                    "0%,100%": { color: "red" },
                    "50%": { color: "blue" },
                },
                diChuyen: {
                    "0%": { transform: "translateX(75%)" },
                    "10%": { transform: "translateX(50%)" },
                    "20%": { transform: "translateX(25%)" },
                    "40%": { transform: "translateX(0%)" },
                    "50%": { transform: "translateX(-25%)" },
                    "60%": { transform: "translateX(-50%)" },
                    "70%": { transform: "translateX(-75%)" },
                    "80%": { transform: "translateX(-100%)" },
                    "90%": { transform: "translateX(-125%)" },
                    "100%": { transform: "translateX(-150%)" },
                },
            },
            animation: {
                wiggle: "wiggle 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
