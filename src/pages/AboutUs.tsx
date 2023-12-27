import { Divider } from "@nextui-org/react";
import { IconPointFilled } from "@tabler/icons-react";

function AboutUs() {
    return (
        <div className="px-4 md:px-32 md:mx-16 lg:px-48">
            <div className="my-2  grid grid-cols-1 justify-items-center">
                <img src="/assets/aboutus/profile.png" alt="Profile Photo" width={250} height={250} />
                <Divider className="mb-2" />
                <h1 className="font-semibold text-3xl">Krunal Bhadesiya</h1>
            </div>
            <Divider className="my-2" />
            <div>
                <p className="text-justify">
                    This professional is equipped with a Bachelor&apos;s degree in Information Technology and boasts a robust technical skill set. Specializing in web development, they demonstrate mastery in HTML, CSS (including Bootstrap and Tailwind), JavaScript, and both JavaScript and TypeScript for React development. Their expertise extends to UI/UX design, showcasing proficiency in Figma, a leading design tool.
                </p>
                <Divider className="my-2" />
                <p className="text-justify">
                    A noteworthy aspect of their skill repertoire is their familiarity with design systems such as Primer, MUI (Material-UI), and Shadcn UI. This proficiency enhances their ability to craft user-friendly digital experiences. Their diverse skill set positions them as a valuable asset in the realms of both technology and design, capable of delivering innovative solutions.
                </p>
                {/* <Divider className="my-2" /> */}
                {/* <p className="text-justify">
        In summary, this individual is a well-rounded professional with a strong foundation in information technology, coupled with a keen eye for design. Their technical expertise, coupled with creative prowess, makes them a valuable contributor capable of delivering cutting-edge solutions in the dynamic landscape of technology and design.
      </p> */}
            </div>
            <Divider className="my-2" />
            <div>
                <h1 className="font-semibold text-xl">Education</h1>
                <ul>
                    <li><IconPointFilled className="inline-block" width={18} />Bachelor of Technology in Information Technology
                        <ul>
                            <li className="pl-8 text-sm">Pursuing from Silver Oak University, Ahmadabad
                                <ul>
                                    <li className="pl-4 text-xs">October 2021 - May 2025</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li > <IconPointFilled className="inline-block" width={18} />Higher Secondary (Science)
                        <ul >
                            <li className="pl-8 text-sm">Sarthak Vidhya Mandir, Morbi
                                <ul >
                                    <li className="pl-4 text-xs">June 2019 - May 2021</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Divider className="my-2" />
            <div>
                <h1 className="font-semibold text-xl">Certification</h1>
                <ul>
                    <li >
                        <IconPointFilled className="inline-block" width={18} />
                        <a href="https://coursera.org/share/752e3ef1adddd5234b808a6807cf8039" target="_blank" rel="noopener noreferrer">
                            React Basics At Meta
                        </a>
                    </li>
                    <li>
                        <IconPointFilled className="inline-block" width={18} />
                        <a href="https://coursera.org/share/1fc37bd833ca0ebb8a3e27737d45f24e" target="_blank" rel="noopener noreferrer">
                            Foundations of User Experience (UX) Design At Google
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutUs