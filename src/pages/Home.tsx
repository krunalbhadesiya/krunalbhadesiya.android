import { Divider } from "@nextui-org/react";
import { IconBrandCss3, IconBrandFigma, IconBrandGit, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandReact, IconComponents, IconPointFilled, IconSql } from "@tabler/icons-react";



function Home() {
  return (
    <div className="px-4 sm: md:px-0 lg:px-48">
      <div className="my-2 grid grid-cols-1 md:grid-cols-2 ">
        <div className="mt-2 ml-10 self-center ">
          <p className="mb-1 text-xl md:text-3xl font-medium">I am </p>
          <h1 className="mb-2 text-3xl md:text-5xl font-semibold">Krunal Bhadesiya</h1>
          <h2 className="text-lg md:text-2xl">React Developer | Web Developments | Ui/Ux Designer</h2>
        </div>
        <img className="m-3 md:m-6 self-center justify-self-center" src="/assets/home/img1.png" alt="styish profile" width={350} height={350} />
      </div>
      <Divider className="my-4" />
      <div className="my-2 grid grid-cols-1 md:grid-cols-2">
        <img className="mb-3 md:mb-6 self-center justify-self-center" src="/assets/home/frontendcover.png" alt="styish profile" width={350} height={350} />
        <div className="my-2 self-center">
          <p className="mb-3 md:mb-5 text-xl md:text-3xl font-montserrat font-bold">Frontend Technology</p>
          <ul className="flex flex-col gap-3">
            <li className="flex flex-row gap-2" ><IconBrandHtml5 /> HTML</li>
            <li className="flex flex-col" >
              <div className="flex flex-row gap-2">
                <IconBrandCss3 /> CSS
              </div>
              <ul className="ml-8">
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> Bootstrap</li>
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> Tailwind</li>
              </ul>
            </li>
            <li className="flex flex-row gap-2" ><IconBrandJavascript /> JavaScript</li>
            <li className="flex flex-col" >
              <div className="flex flex-row gap-2">
                <IconBrandReact /> React
              </div>
              <ul className="ml-8">
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> JavaScript</li>
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> TypeScript</li>
              </ul>
            </li>
            <li className="flex flex-col" >
              <div className="flex flex-row gap-2">
                <IconComponents /> Design System & Ui Components Library
              </div>
              <ul className="ml-8">
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> Shadcn</li>
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> Primer</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>      
      <Divider className="my-4" />
      <div className="my-2 grid grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-10 lg:gap-14">
        <img className="md:hidden lg:hidden md:mr-80 self-center justify-self-center" src="/assets/home/databasecover.png" alt="styish profile" width={350} height={350} />
        <div className="mt-2 lg:pl-60 self-center">
          <p className="mb-3 md:mb-5 text-xl md:text-3xl font-montserrat font-bold">Database</p>
          <ul className="flex flex-col gap-3">
            <li className="flex flex-row gap-2" ><IconSql /> SQl</li>
            <li className="flex flex-row gap-2" ><IconBrandMongodb /> Mongodb</li>
          </ul>
        </div>
        <img className="hidden sm:block md:block lg:block md:mr-80 self-center justify-self-center" src="/assets/home/databasecover.png" alt="styish profile" width={350} height={350} />
      </div>
      <Divider className="my-4" />
      <div className="my-2 grid grid-cols-1 md:grid-cols-2">
        <img className="mb-3 md:mb-6 self-center justify-self-center" src="/assets/home/versioncontrolcover.png" alt="styish profile" width={350} height={350} />
        <div className="mt-2 self-center">
          <p className="mb-3 md:mb-5 text-xl md:text-3xl font-montserrat font-bold">Virsion Control</p>
          <ul className="flex flex-col gap-3">
            <li className="flex flex-row gap-2" ><IconBrandGit /> Git</li>
            <li className="flex flex-row gap-2" ><IconBrandGithub /> GitHub</li>
          </ul>
        </div>
      </div>
      <Divider className="my-4"  />
      <div className=" my-2 grid grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-10 lg:gap-14">
        <img className="md:hidden lg:hidden md:mr-80 self-center justify-self-center" src="/assets/home/uiuxcover.png" alt="styish profile" width={350} height={350} />
        <div className="mt-2 lg:pl-60 self-center">
          <p className="mb-3 md:mb-5 text-xl md:text-3xl font-montserrat font-bold">Ui Ux Design</p>
          <ul className="flex flex-col gap-3">
            <li className="flex flex-col" >
              <div className="flex flex-row gap-2">
                <IconBrandFigma /> Figma
              </div>
              <ul className="ml-8">
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> Wireframe</li>
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> Prototype</li>
                <li className="flex flex-row items-center gap-2 font-normal text-xs"><IconPointFilled width={8} /> Auto Layout</li>
              </ul>
            </li>
          </ul>
        </div>
        <img className="hidden sm:block md:block lg:block md:mr-80 self-center justify-self-center" src="/assets/home/uiuxcover.png" alt="styish profile" width={350} height={350} />
      </div>
    </div>
  )
}

export default Home