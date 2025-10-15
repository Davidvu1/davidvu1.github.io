import p1_img from "../assets/tripquick.png"
import p2_img from "../assets/foodit.png"
import typescript_icon from './TypeScript.svg'
import python_icon from './Python.svg'
import javascript_icon from './JavaScript.svg'
import react_icon from './React.svg'
import swift_icon from './Swift.svg'
import spring_icon from './Spring.svg'
import django_icon from './Django.svg'
import css_icon from './Css3.svg'
import html_icon from './HTML5.svg'
import java_icon from './Java.svg'
import postgres_icon from './PostgresSQL.svg'
import wip_img from './WIP.png'
import justastartup_img from './Justastartup.png'
import nodejs_icon from './Node.js.svg'
import tailwind_icon from './Tailwind CSS.svg'


const Project_Data = [
    {
        p_no: 1,
        p_name: "TripQuick",
        p_img: p1_img,
        p_desc: "Tripquick is a hackathon project built at Hack The Valley 9 in 36 hours. I have added on to it to make it better.",
        tech_stack: [
            { name: "JavaScript", icon: javascript_icon },
            { name: "React", icon: react_icon },
            { name: "Python", icon: python_icon },
            { name: "Django", icon: django_icon },
            { name: "Css", icon: css_icon },
            { name: "Html", icon: html_icon },

            
        ]
    },
    {
        p_no: 2,
        p_name: "FoodIt",
        p_img: p2_img,
        p_desc: `FoodIt is an app designed to help users find restauraunts 
        and share to others about their favourite places to eat.`,
        tech_stack: [
            { name: "Swift", icon: swift_icon },
            { name: "Springboot", icon: spring_icon },
            { name: "Java", icon: java_icon },
            { name: "Postgres", icon: postgres_icon },
        ]
    },
        {
        p_no: 3,
        p_name: "JustAStartup",
        p_img: justastartup_img,
        p_desc: `JustAStartup is a hackathon project built at Hack The Valley 10 in 36 hours. 
        We designed a responsive website in ReactJS and TypeScript,
         with Google Authentication in Supabase. 
         We also created a data pipeline with Startup Data for this project. `,
        tech_stack: [
            { name: "Typescript", icon: typescript_icon },
            { name: "React", icon: react_icon },
            { name: "Tailwind", icon: tailwind_icon },
            { name: "Html", icon: html_icon },
            { name: "Node.js", icon: nodejs_icon },
            { name: "Postgres", icon: postgres_icon },
            
        ]
    },
        {
        p_no: 4,
        p_name: "TBD",
        p_img: wip_img,
        p_desc: "Perhaps I am working on something right now",
        tech_stack: [

        ]
    }

]

export default Project_Data;