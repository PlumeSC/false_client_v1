/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Sarabun", "sans-serif"],
            },
            boxShadow:{
                'shadowPri':'0px 0px 20px 8px rgba(234, 1, 217, 0.3)',
                'shadowSec':'0px 0px 20px 8px rgba(196, 243, 199, 0.3)',
                'shadowPriCyber':'0px 0px 20px 8px #4EEDC3 ',
                'livescoreA':'-1px 2px 4px #ffffff',
                'livescoreB':'0px -2px 4px 2px #E849DC',
            },
            dropShadow:{
                'logo':'0px 0px 10px rgba(234, 1, 217, 0.8)',
                'hoverLogo':'0px 0px 10px rgba(11, 189, 199, 0.8)',
            }
        },
        colors: {
            ...colors,
            cyberPunk:{
                primary :"#4EEDC3",
                secondary:"#63E1F5",
                text:"#C4F3FA",
                bgA:"#E849DC",
                bgB:"#4C48E0"
            },
            neon:{
                primary :"#EA01D9",
                secondary:"#0BBDC7",
                text:"#eeeeee",
                bgA:"#091933",
                bgB:"#6F1C8F"
            },
        },

        fontSize: {
            "2xs": "0.6rem",
            buttonLogin:"0.7rem",
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
    },
    plugins: [require("daisyui")],
};
