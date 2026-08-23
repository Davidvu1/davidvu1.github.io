// overwatch blog
import overwatchlogo from './blog/my-involvement-in-esports-and-what-i-think/overwatchlogo.png'
import canadapic from './blog/my-involvement-in-esports-and-what-i-think/teamcanadaowwc.png'
import ccl2025 from './blog/my-involvement-in-esports-and-what-i-think/CCL2025.png'
import top29s3 from './blog/my-involvement-in-esports-and-what-i-think/top29s3.png'
// nats blog
import natslogo from './blog/what-the-heck-is-nats/natslogo.png'
import natslogobig from './blog/what-the-heck-is-nats/natslogobig.png'


const Blog_Data = [
  {
    b_title: "My Esports Career",
    b_slug: "my-involvement-in-esports-and-what-i-think",
    b_excerpt: "A summary about being the top 0.01% in something with 13 million monthly players.",
    b_date: "July 25, 2026",
    b_category: "Esports",
    b_gallery_image: overwatchlogo,
    b_image: overwatchlogo,
    b_images: {
      logo: overwatchlogo,
      canadapic: canadapic,
      ccl2025: ccl2025,
      top29s3: top29s3,

    },
    b_content: `
    ## Introduction:
    Outside of tech, one of my hobbies is to compete in video games. Somehow, I got really good at a game called [Overwatch,](https://overwatch.blizzard.com/en-us) and became better than 99.99% of the playerbase (a lot of people). Some cool things I did were winning a bit of money, ranking as a top 30 player, being invited to Team Canada Closed Tryouts in 2023, and then just doing esports stuff with my school at UofT Esports.
    ![Overwatch logo|40%|!left](logo)


    ## What I did:

    ![team canada owwc trial pic|80%|!left](canadapic)
    Team Canada closed tryouts under the alias Defferatel for the 2023 Overwatch World Cup. Source: [Team Canada OWWC](https://x.com/TeamCanadaOWWC/status/1646327357291266051?s=20)

    ![2025 ccl pic|70%|!left](ccl2025)
    Rank 1st in the 2025 Canadian Collegiate League for Overwatch. Source: [Liquidpedia](https://liquipedia.net/overwatch/Canadian_Collegiate_League/Season_1)

    ![top 29 s3|70%|!left](top29s3)
    In season 3 of Overwatch 2, I was in the top 30 for North America. Source: From the game's leaderboard.

    ## What I do now:

    To focus on my career now, I took a break from competing at a more serious level (collegiate is not as time-draining nor as competitive). What I do now mostly, is grow the [UofT Esports club](https://www.instagram.com/uoftesports?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==) in the games I like.

    `,
  },
      {
    b_title: "What the heck is NATS?!?!?!",
    b_slug: "what-the-heck-is-nats",
    b_excerpt: "Figuring out scary event-driven messaging systems. (Not Network Address Translation) ",
    b_date: "August 23, 2026",
    b_category: "Technology",
    b_gallery_image: natslogo,
    b_image: natslogo,
    b_images: {
      logo: natslogobig,

    },
    b_content: `

    ## Introduction:
    At work, one of the tools I had to learn was NATS. Not Network Address Translation in networking, but a messaging system for real-time communication and distributed systems by Synadia. \n
    Like many messaging systems in a microservices architecture, NATS is pretty deep. Interesting. But deep. My brain definitely did explode learning NATS! Hopefully this blog post helps explain NATS at a basic level!
    ![NATS logo|80%|!left](logo)

    ## The Basics:
    To explain NATS first, we must first explore why we should use NATS. What "problem" does NATS aim to solve?
    \n
    First, we must understand what a microservices architecture is, and figure out why we should even use it for our software.



    ------ still writing this blog as we speak.. ! .... to be updated ... diagrams getting made ... blerp -------
    
    ` 
  },
]

export default Blog_Data
