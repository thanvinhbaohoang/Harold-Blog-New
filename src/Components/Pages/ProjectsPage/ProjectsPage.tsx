import ProjectCards from "../HomePage/ProjectCards"
import { FaGithub} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import FeaturedProject from "./FeaturedProject";


const Projects:Project[]=[
    {
        title: "CashStream", 
        date: "2021-10-10",
        author: "Harold Than",
        content: " Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "EtherStream", 
        date: "2021-10-10",
        author: "Harold Than",
        content: " Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },{
        title: "DartMart", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "A Dartmouth College specific food delivery app with DUO 2-FA Authentication", 
    },
    {
        title: "Spectre Wallet", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "A Crypto Wallet Web-App and React-Native-App Designed and Implemented using Bitcore-lib", 
    },
    {
        title: "CAD Walking Serpent", 
        date: "2021-10-10",
        author: "Harold Than",
        content: " Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
    {
        title: "Tiny Search Engine", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Web Search Engine programmed in C with use of Crawler, Indexer and Querier", 
    },
    {
        title: "Is She Into You?", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Pure CSS and HTML Card 'Game' Based On SimplyExplained's Youtube Video of the same name", 
    },{
        title: "Sudoku Generator and Solver", 
        date: "2021-10-10",
        author: "Harold Than",
        content: " A Sudoku Game Generator and Solver Program written in C", 
    },{
        title: "SpooderMan", 
        date: "2021-10-10",
        author: "Harold Than",
        content: " Swing Around the city skyline and beat up bean-people ('oof') as Spooderman.", 
    },{
        title: "Ivy League Sentiments", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Data Analysis through Web-Scraping Reddit and Twitter to get the general sentiments of each Ivy League College Online", 
    },{
        title: "Boids Deep Sea Simulation", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "A Deep Sea VR Cage Diving Experience with Schools Of Fish behavior simulated with Boids Algorithm", 
    },{
        title: "Ad-VR-Tise", 
        date: "2021-10-10",
        author: "Harold Than",
        content: " 3D Consensual Advertisement Model with Interactive UI for the mostly unexplored VR Metaverse ads space", 
    },{
        title: "GuitAR Hero", 
        date: "2021-10-10",
        author: "Harold Than",
        content: "Learn to play real guitar through a Guitar Hero Game using Augmented Reality", 
    },
    {
        title: "Hidden Markov Tagger", 
        date: "2021-10-10",
        author: "Harold Than",
        content: " Lorem Ipsum bla blab oajdaksdm hell oworld bull shit what ever", 
    },
]



export default function ProjectsPage() {
    return(
        <div className="flex flex-col  items-center ">
            <ProjectCards />
      </div>

    )
}