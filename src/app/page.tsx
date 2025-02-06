import Image from "next/image"
import Link from "next/link"
import nexumeConfig from "~/nexume.config"

const { layout } = nexumeConfig

export default function Home() {
  const getDateDiff = (d1: string, d2: string) => {
    const pattern = /^\d{4}-\d{2}$/
    const date = new Date()
    let d1y, d1m, d2y, d2m, dateDiff, yToM

    if (d1 !== '' && pattern.test(d1)) {
      d1y = Number(d1.split('-')[0])
      d1m = Number(d1.split('-')[1])

      if (d2 !== '' && pattern.test(d2)) {
        d2y = Number(d2.split('-')[0])
        d2m = Number(d2.split('-')[1])
      } else {
        d2y = date.getFullYear()
        d2m = date.getMonth()
      }

      yToM = d2y === d1y
        ? d2m - d1m
        : d2y - d1y === 1
          ? (13 - d1m) + d2m
          : ((d2y - d1y - 1) * 12) + (13 - d1m) + d2m
      dateDiff = (Math.ceil((yToM / 12) * 10) / 10).toString()

      return dateDiff.includes('.') ? (dateDiff.split('.')[0] + (dateDiff.split('.')[0] === '0' || dateDiff.split('.')[0] === '1' ? 'y ' : 'ys ') + dateDiff.split('.')[1] + 'm') : (dateDiff + 'y')
    } else return ''
  }

  return (
    <main className="pt-16 pb-8 px-5 w-full flex justify-center leading-normal tracking-wide text-l-2">
      <div style={{ maxWidth: layout.width ? layout.width : 794 }} className="w-full">

        {/* Title */}
        <section className="flex flex-col lg:flex-row gap-16 pb-8 border-b border-l-e">
          {
            layout.profileImg &&
            <div className="w-56 h-56 relative shrink-0 overflow-hidden rounded-lg bg-l-e">
              <Image src={layout.profileImg} alt="Profile image" fill priority={true} sizes="100%" className="object-cover" />
            </div>
          }
          <div>
            <h1 className="text-4xl font-semibold">Farhan Ahmad</h1>
            <h3 className="text-xl mt-1.5">Full Stack Engineer</h3>
            <div className="px-6 py-5 mt-3 rounded-lg border-2 border-h-main/50 bg-h-main/10">
              <div className="group relative flex items-center gap-2 text-l-5">
                <div className="relative">
                  <i className="fa-solid fa-angle-right absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 duration-200"></i>
                  <div className="group-hover:scale-0 group-hover:opacity-0 duration-200">
                    <i className="fa-brands fa-github"></i>
                  </div>
                </div>
                <Link href="https://github.com/codingfarhan" target="_blank" className="group text-h-main">
                  <span className="rounded-md border-2 border-transparent group-hover:border-h-main duration-200">https://github.com/codingfarhan</span>
                  <i className="fa-solid fa-link ml-1 text-xs"></i>
                </Link>
              </div>
              <div className="group mt-1.5 relative flex items-center gap-2 text-l-5">
                <div className="relative">
                  <i className="fa-solid fa-angle-right absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 duration-200"></i>
                  <div className="group-hover:scale-0 group-hover:opacity-0 duration-200">
                    <i className="fa-solid fa-earth-asia"></i>
                  </div>
                </div>
                <Link href="https://www.linkedin.com/in/farhans-profile/" target="_blank" className="group text-h-main">
                  <span className="rounded-md border-2 border-transparent group-hover:border-h-main duration-200">https://www.linkedin.com/in/farhans-profile/</span>
                  <i className="fa-solid fa-link ml-1 text-xs"></i>
                </Link>
              </div>
            </div>
            <div className="px-6 py-5 mt-3 rounded-lg border-2 border-l-8/50 bg-l-e/10">
              <div className="group relative flex items-center gap-2 text-l-5">
                <i className="fa-regular fa-compass"></i>
                Delhi, India
              </div>
              <div className="group mt-1.5 relative flex items-center gap-2 text-l-5">
                <i className="fa-solid fa-at"></i>
                syedfarhanahmad0@gmail.com
              </div>
            </div>
          </div>
        </section>

        {/* About me */}
        <section className="mt-8">
          <h2 className="mb-6 text-3xl font-semibold">About me</h2>
          <p>
            With 3+ years of experience, I specialize in crafting scalable software solutions across web2, web3, and AI domains. At Willow, I'm building "Will" an AI agent simplifying social media management for businesses. As a Full-Stack Blockchain Engineer at Add3, I designed and scaled a B2B DeFi app, powering $65M+ in TVL and thousands of daily staking transactions. My technical expertise spans React.js, Node.js, NestJS, and Solidity, delivering innovative tools for smart contract deployment, token sales, and liquidity pools.
            <br />
            <br />
            Beyond engineering, I am passionate about open source, contributing to projects like Thirdweb SDK and CopilotKit AI SDK, enhancing user experiences for over 100k developers. Coming from an Economics background, I merge analytical thinking with technical prowess to solve complex challenges.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-20">
          <h2 className="flex gap-4 text-3xl font-semibold">
            Skills
            <div className="w-max relative cursor-pointer group">
              <i className="fa-solid fa-circle-question absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-200"></i>
              <i className="fa-regular fa-circle-question group-hover:scale-0 group-hover:opacity-0 duration-200"></i>
              <div className="w-max text-xs font-normal pl-4 absolute right-0 top-1/2 translate-x-full -translate-y-1/2 invisible group-hover:visible">
                <div className="w-full px-6 py-2 rounded-full text-white bg-l-2 origin-left scale-0 -translate-x-3 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 duration-200">
                  <div>
                    Developing: grey<br />
                    Production: purple
                  </div>
                  <div className="w-3 h-3 rotate-45 absolute left-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-l-2"></div>
                </div>
              </div>
            </div>
          </h2>
          <div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
            <h3 className="w-40 shrink-0 text-lg">Programming Languages</h3>
            <ul className="flex flex-wrap gap-2">
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-cuttlefish"></i>
                C++
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-python"></i>
                Python
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-lg fa-solid fa-code"></i>
                JavaScript
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-lg fa-solid fa-code"></i>
                TypeScript
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-solidity"></i>
                Solidity
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-lg fa-solid fa-database"></i>
                SQL
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
            <h3 className="w-40 shrink-0 text-lg">Frontend Stack</h3>
            <ul className="flex flex-wrap gap-2">
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-react"></i>
                ReactJS
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-nextjs"></i>
                Next.js
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-bootstrap"></i>
                BootStrap5
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-tailwind"></i>
                TailwindCSS
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                react-query
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                react-router
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                redux
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Jinja2
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Postcss
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                AJAX, XHR, Fetch API
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Ethersjs, Web3js
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Uniswap v3
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
            <h3 className="w-40 shrink-0 text-lg">Backend Stack</h3>
            <ul className="flex flex-wrap gap-2">
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-lg fa-solid fa-code"></i>
                Express
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-lg fa-solid fa-code"></i>
                Django
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                FastAPI
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Nodejs
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Nestjs
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
            <h3 className="w-40 shrink-0 text-lg">Databases</h3>
            <ul className="flex flex-wrap gap-2">
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-lg fa-solid fa-code"></i>
                PostgreSQL
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                MySQL
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                SQLite
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                MongoDB Atlas
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Redis
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
            <h3 className="w-40 shrink-0 text-lg">Development Tools</h3>
            <ul className="flex flex-wrap gap-2">
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-lg fa-solid fa-code"></i>
                Git, GitHub
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                NPM, pip
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                VS Code, Jupyter Notebook
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
                <i className="text-lg fa-solid fa-code"></i>
                Docker
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
            <h3 className="w-40 shrink-0 text-lg">Hosting Platforms</h3>
            <ul className="flex flex-wrap gap-2">
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-vercel"></i>
                Vercel
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-heroku"></i>
                Heroku
              </li>
              <li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
                <i className="text-xl fa-brands fa-aws"></i>
                AWS Lambda
              </li>
            </ul>
          </div>
        </section>

        {/* Experiences */}
        <section className="mt-20">
          <h2 className="flex items-center gap-4 text-3xl font-semibold">
            Work Experience
            <div className="h-fit text-sm font-normal flex items-center rounded-lg overflow-hidden text-white">
              <div className="px-2.5 py-1.5 bg-l-5">Total</div>
              <div className="px-2.5 py-1.5 bg-h-main">
                {getDateDiff("2022-01", "") !== '' && getDateDiff("2022-01", "")}
              </div>
            </div>
          </h2>
          <div className="w-full mt-12 flex flex-col gap-5">
            <div className="w-full mt-8 flex flex-col lg:flex-row gap-5">
              <div className='w-full lg:w-[30%] shrink-0 flex flex-col gap-4'>
                <h3 className='w-fit text-lg pl-2 pr-5 font-medium flex items-center rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main'>
                  <div className='w-10 h-10 flex justify-center items-center'>
                    <svg className='w-5 h-5 fill-h-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 
            21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 
            64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 
            64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 
            7.2 16 16v48c0 8.8-7.2 16-16 
            16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 
            16v48c0 8.8-7.2 16-16 
            16H232c-8.8 0-16-7.2-16-16V104c0-8.8 
            7.2-16 16-16zM88 232c0-8.8 
            7.2-16 16-16h48c8.8 0 16 
            7.2 16 16v48c0 8.8-7.2 16-16 
            16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 
            7.2 16 16v48c0 8.8-7.2 16-16 
            16H232c-8.8 0-16-7.2-16-16V232c0-8.8 
            7.2-16 16-16z"/>
                    </svg>
                  </div>
                  Willow
                </h3>
                <div className='flex flex-col gap-1.5 lg:pl-2'>
                  <div>Full-Stack Engineer (AI Agents)</div>
                  <div className='text-sm text-l-8'>Dec 2024 - Present</div>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium">
                  Built and maintained an AI Agent (Will) for social media management.
                </h3>
                <ul className="mt-3 pl-5 list-disc flex flex-col gap-3">
                  <li>Maintained and improved Willow SMM product (Node.js, TypeScript) for speed and stability.</li>
                  <li>Developed new backend and frontend features as needed.</li>
                  <li>Owned CI/CD processes, streamlining deployment workflows.</li>
                  <li>Communicated across teams to gather requirements and deliver on time.</li>
                </ul>
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col lg:flex-row gap-5">
              <div className='w-full lg:w-[30%] shrink-0 flex flex-col gap-4'>
                <h3 className='w-fit text-lg pl-2 pr-5 font-medium flex items-center rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main'>
                  <div className='w-10 h-10 flex justify-center items-center'>
                    <svg className='w-5 h-5 fill-h-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 
            16 16h80V400c0-26.5 21.5-48 
            48-48s48 21.5 48 48v64h80c8.8 0 
            16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 
            64C0 28.7 28.7 0 64 0H320c35.3 0 
            64 28.7 64 64V448c0 35.3-28.7 64-64 
            64H64c-35.3 0-64-28.7-64-64V64zm88 
            40c0-8.8 7.2-16 16-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 
            88h48c8.8 0 16 7.2 16 
            16v48c0 8.8-7.2 16-16 
            16H232c-8.8 0-16-7.2-16-16V104c0-8.8 
            7.2-16 16-16zM88 232c0-8.8 
            7.2-16 16-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 
            7.2-16 16-16z"/>
                    </svg>
                  </div>
                  Add3
                </h3>
                <div className='flex flex-col gap-1.5 lg:pl-2'>
                  <div>Full-Stack Blockchain Engineer</div>
                  <div className='text-sm text-l-8'>Feb 2023 - Dec 2024</div>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium">
                  Built a B2B DeFi platform for no-code token distribution.
                </h3>
                <ul className="mt-3 pl-5 list-disc flex flex-col gap-3">
                  <li>Created and maintained DeFi app with React.js, ChakraUI, NestJS, and PostgreSQL.</li>
                  <li>Integrated 300+ wallets and 200+ blockchains for seamless EVM-based interactions.</li>
                  <li>Handled $65M TVL and thousands of daily staking transactions.</li>
                  <li>Launched features like Add Liquidity, Swap, Token Sale, and Smart Contract Analytics.</li>
                </ul>
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col lg:flex-row gap-5">
              <div className='w-full lg:w-[30%] shrink-0 flex flex-col gap-4'>
                <h3 className='w-fit text-lg pl-2 pr-5 font-medium flex items-center rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main'>
                  <div className='w-10 h-10 flex justify-center items-center'>
                    <svg className='w-5 h-5 fill-h-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 
            16 16h80V400c0-26.5 21.5-48 
            48-48s48 21.5 48 48v64h80c8.8 0 
            16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 
            64C0 28.7 28.7 0 64 0H320c35.3 0 
            64 28.7 64 64V448c0 35.3-28.7 64-64 
            64H64c-35.3 0-64-28.7-64-64V64zm88 
            40c0-8.8 7.2-16 16-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 
            88h48c8.8 0 16 7.2 16 
            16v48c0 8.8-7.2 16-16 
            16H232c-8.8 0-16-7.2-16-16V104c0-8.8 
            7.2-16 16-16zM88 232c0-8.8 
            7.2-16 16-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 
            7.2-16 16-16z"/>
                    </svg>
                  </div>
                  Adcanyon
                </h3>
                <div className='flex flex-col gap-1.5 lg:pl-2'>
                  <div>Full-Stack Developer</div>
                  <div className='text-sm text-l-8'>June 2022 - Jan 2023</div>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium">
                  Built an internal web app for Amazon Ad data management.
                </h3>
                <ul className="mt-3 pl-5 list-disc flex flex-col gap-3">
                  <li>Handled 4M+ rows of Amazon Ad campaign data using Django, Jinja2, JavaScript, and MySQL.</li>
                  <li>Built the entire stack, including frontend, backend, and database.</li>
                  <li>Deployed on Heroku with CI/CD, speeding up performance and data access.</li>
                  <li>Analyzed ad campaign trends and flagged data anomalies for business insights.</li>
                </ul>
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col lg:flex-row gap-5">
              <div className='w-full lg:w-[30%] shrink-0 flex flex-col gap-4'>
                <h3 className='w-fit text-lg pl-2 pr-5 font-medium flex items-center rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main'>
                  <div className='w-10 h-10 flex justify-center items-center'>
                    <svg className='w-5 h-5 fill-h-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 
            16 16h80V400c0-26.5 21.5-48 
            48-48s48 21.5 48 48v64h80c8.8 0 
            16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 
            64C0 28.7 28.7 0 64 0H320c35.3 0 
            64 28.7 64 64V448c0 35.3-28.7 64-64 
            64H64c-35.3 0-64-28.7-64-64V64zm88 
            40c0-8.8 7.2-16 16-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 
            88h48c8.8 0 16 7.2 16 
            16v48c0 8.8-7.2 16-16 
            16H232c-8.8 0-16-7.2-16-16V104c0-8.8 
            7.2-16 16-16zM88 232c0-8.8 
            7.2-16 16-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 
            7.2-16 16-16z"/>
                    </svg>
                  </div>
                  Moodme AI
                </h3>
                <div className='flex flex-col gap-1.5 lg:pl-2'>
                  <div>AI Software Engineer</div>
                  <div className='text-sm text-l-8'>Jan 2021 - Mar 2021</div>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium">
                  Developed Deep Learning models for facial feature detection.
                </h3>
                <ul className="mt-3 pl-5 list-disc flex flex-col gap-3">
                  <li>Used Python, Keras, and OpenCV to detect gender (70% accuracy) and age (60% accuracy).</li>
                  <li>Trained on a dataset of 10k+ facial images, exported models for production deployment.</li>
                </ul>
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col lg:flex-row gap-5">
              <div className='w-full lg:w-[30%] shrink-0 flex flex-col gap-4'>
                <h3 className='w-fit text-lg pl-2 pr-5 font-medium flex items-center rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main'>
                  <div className='w-10 h-10 flex justify-center items-center'>
                    <svg className='w-5 h-5 fill-h-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 
            7.2 16 16 16h80V400c0-26.5 
            21.5-48 48-48s48 21.5 48 48v64h80c8.8 
            0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 
            64C0 28.7 28.7 0 64 0H320c35.3 0 64 
            28.7 64 64V448c0 35.3-28.7 64-64 
            64H64c-35.3 0-64-28.7-64-64V64zm88 
            40c0-8.8 7.2-16 16-16h48c8.8 
            0 16 7.2 16 16v48c0 
            8.8-7.2 16-16 16H104c-8.8 
            0-16-7.2-16-16V104zM232 
            88h48c8.8 0 16 7.2 16 
            16v48c0 8.8-7.2 16-16 
            16H232c-8.8 0-16-7.2-16-16V104c0-8.8 
            7.2-16 16-16zM88 232c0-8.8 
            7.2-16 16-16h48c8.8 0 
            16 7.2 16 16v48c0 8.8-7.2 
            16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 
            0 16 7.2 16 16v48c0 
            8.8-7.2 16-16 16H232c-8.8 
            0-16-7.2-16-16V232c0-8.8 
            7.2-16 16-16z"/>
                    </svg>
                  </div>
                  khelnet
                </h3>
                <div className='flex flex-col gap-1.5 lg:pl-2'>
                  <div>Full-Stack Developer (Co-founder)</div>
                  <div className='text-sm text-l-8'>Dec 2019 - Dec 2020</div>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium">
                  Built a complete web application for real-time engagement.
                </h3>
                <ul className="mt-3 pl-5 list-disc flex flex-col gap-3">
                  <li>Developed from scratch using Django and JavaScript, integrated WebSockets for chat.</li>
                  <li>Led user feedback cycles, refined features, and fixed bugs swiftly.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Educations */}
        <section className="mt-20">
          <h2 className="flex items-center gap-4 text-3xl font-semibold">Education</h2>
          <ul className="w-full mt-8 flex flex-col gap-3">
            <li className="w-full p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-lg border border-l-c">
              <div className="w-32 h-32 shrink-0 flex justify-center items-center rounded-lg bg-h-main/10 text-h-main">
                <i className="text-5xl fa-solid fa-school"></i>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-lg">Hansraj College, Delhi University</h3>
                <div>Bachelor in Economics (9.68 CGPA)</div>
              </div>
            </li>
            <li className="w-full p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-lg border border-l-c">
              <div className="w-32 h-32 shrink-0 flex justify-center items-center rounded-lg bg-h-main/10 text-h-main">
                <i className="text-5xl fa-solid fa-school"></i>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-lg">Indraprastha Global School</h3>
                <div>High School Diploma (97.75%)</div>
              </div>
            </li>
            <li className="w-full p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-lg border border-l-c">
              <div className="w-32 h-32 shrink-0 flex justify-center items-center rounded-lg bg-h-main/10 text-h-main">
                <i className="text-5xl fa-regular fa-id-card"></i>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-lg">IBM Professional Data Science Certificate</h3>
                <div>Focused on data science, machine learning with Python, and SQL</div>
              </div>
            </li>
            <li className="w-full p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-lg border border-l-c">
              <div className="w-32 h-32 shrink-0 flex justify-center items-center rounded-lg bg-h-main/10 text-h-main">
                <i className="text-5xl fa-regular fa-id-card"></i>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-lg">Online Degree in Blockchain</h3>
                <div>Learned in-depth about how distributed ledger works and about different consensus protocols.</div>
              </div>
            </li>
          </ul>
        </section>

      </div>
    </main>
  )
}