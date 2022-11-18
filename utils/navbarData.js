import {
    BsFillTriangleFill,
    BsStars,
    BsFillPatchCheckFill,
    BsDiscord,
    BsTelegram,
    BsTwitter,
    BsYoutube,
    BsGithub,
    BsInstagram,
    BsBook,
    BsSearch,
    BsShieldCheck,
    BsShieldExclamation,
    BsQuestionCircleFill,
} from "react-icons/bs";
import {
    CiRainbow
} from "react-icons/ci";
import {
    HiOutlineDatabase,
    HiDownload,
} from "react-icons/hi";
import { HiOutlineRectangleStack, HiOutlineNewspaper } from "react-icons/hi2";

import { MdSlowMotionVideo } from "react-icons/md";
import { AiFillThunderbolt, AiTwotonePieChart } from "react-icons/ai";
import { FaBaseballBall, FaEthereum } from "react-icons/fa";
import { SiDialogflow } from "react-icons/si";

const navbarData = {
    about: [
        {
            Component: <BsFillTriangleFill />,
            label: "About Aurora",
        },
        {
            Component: <HiOutlineNewspaper />,
            label: "News & Updates",
        },
        {
            Component: <MdSlowMotionVideo />,
            label: "Videos",
        },
        {
            Component: (
                <div className="bg-blue flex flex-1 border-solid rounded-lg items-center justify-center" style={{ backgroundColor: "slategray" }}>
                    <div className="mr-2"><HiDownload /></div>
                    <p className="text-base">Press Kit</p>
                </div>
            ),
        },
    ],
    ecosystem: [
        {
            Component: <BsStars />,
            label: "Ecosystem Apps",
        },
        {
            Component: <HiOutlineDatabase />,
            label: "Tokens",
        },
        {
            Component: <HiOutlineRectangleStack />,
            label: "Grants",
        },
        {
            Component: <BsFillPatchCheckFill />,
            label: "Aurora DAO",
        },
        {
            Component: <AiTwotonePieChart />,
            label: "Aurora Token",
        },
        {
            Component: <BsFillTriangleFill />,
            label: "Aurora futures token",
        },
        {
            Component: <FaEthereum />,
            label: "Faucet",
        },
        {
            Component: (
                <button className="flex flex-1 border-solid rounded-lg items-center justify-center" style={{ backgroundColor: "slategray" }}>
                    <CiRainbow />
                    <div className="text-base mx-3">Rainbow Bridge</div>
                </button>
            ),
        },
    ],
    community: [
        {
            Component: <BsDiscord />,
            label: "Discord",
        },
        {
            Component: <SiDialogflow />,
            label: "Discussion Forum",
        },
        {
            Component: <BsTelegram />,
            label: "Telegram",
        },
        {
            Component: <BsTwitter />,
            label: "Twitter",
        },
        {
            Component: <BsYoutube />,
            label: "Youtube",
        },
        {
            Component: <BsGithub />,
            label: "Github",
        },
        {
            Component: <BsInstagram />,
            label: "Instagram",
        },
    ],
    developers: [
        {
            Component: <BsBook />,
            label: "Documentation",
            sublabel: "Start developing on Aurora.",
        },
        {
            Component: <BsSearch />,
            label: "Block Developer",
            sublabel: "Find and explore your Aurora transactions.",
        },
        {
            Component: <FaEthereum />,
            label: "Faucet",
            sublabel: "Use our faucet to get Aurora ETH.",
        },
        {
            Component: <AiFillThunderbolt />,
            label: "Testnet bridge",
            sublabel: "Move tokens between Aurora & Ethereum testnets.",
        },
        {
            Component: <BsShieldCheck />,
            label: "Audits",
            sublabel: "Audit reports on our smart contracts.",
        },
        {
            Component: <BsDiscord />,
            label: "Aurora discord",
            sublabel: "Chat with us and get support.",
        },
        {
            Component: (
                <div className="bg-blue flex flex-1 border-solid rounded-lg items-center justify-center" >
                    <div className="flex items-center p-2 rounded-lg" style={{ backgroundColor: "slategray" }}>
                        <BsGithub />
                        <div className="mx-3">Github</div>
                    </div>
                    <div className="flex items-center ml-4 p-2 rounded-lg" style={{ backgroundColor: "slategray" }}>
                        <BsTwitter />
                        <div className="mx-3">Twitter</div>
                    </div>
                </div>
            ),
        },
        {
            Component: <div className="flex flex-1 border-solid rounded-lg items-center justify-center " style={{ backgroundColor: "bg-slate-600" }}>
                <div className="flex items-center">
                    <BsShieldExclamation />
                    <div className="mx-3">Bug Bounty Program</div>
                </div>

            </div>
        },
    ],
    support: [
        {
            Component: <BsQuestionCircleFill />,
            label: "Get Help",
        },
        {
            Component: <FaBaseballBall />,
            label: "Knowledge base",
        },
        {
            Component: <BsTelegram />,
            label: "Telegram",
        },
        {
            Component: <BsDiscord />,
            label: "Discord",
        },
    ],
};

export default navbarData