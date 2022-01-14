import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Danny Doan</title>
        <meta name="author" content="Danny Doancdcdgit addgi-" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="bg-black flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="flex justify-end m-4 md:m-8 lg:m-16">
            <ul className="space-x-5 md:space-x-10 lg-space-x-20">
              <li className="inline"><Link href="/"><a className="underline hover:font-semibold text-white text-xl md:text-2xl lg:text-4xl">/home</a></Link></li>
              <li className="inline"><Link href="/projects"><a className="hover:font-semibold text-white text-xl md:text-2xl lg:text-4xl">/projects</a></Link></li>
              <li className="inline"><Link href="#"><a className="hover:font-semibold text-white text-xl md:text-2xl lg:text-4xl">/interests</a></Link></li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <h1 className="pt-10 text-2xl md:text-4xl lg:text-5xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40">
              Hey, i&apos;m Danny.    
            </h1>
            <p4 className="ml-6 text-gray-400 text-xl pt-2 md:pt-4 lg-6 md:text-2xl lg:text-4xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40">
              20 year-old developer based in California. Currently studying Computer Science @UCI.
            </p4>

            <ul className="text-xl pt-4 md:pt-8 lg-12 md:text-2xl lg:text-4xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40 
            space-x-4 md:space-x-8 lg-space-x-16">
              <li className="inline hover:font-semibold" ><a href="mailto:dannykdoan@gmail.com">email➚</a></li>
              <li className="inline hover:font-semibold"><a href="https://github.com/dkdoan">github➚</a></li>
              <li className="inline hover:font-semibold"><a href="https://www.linkedin.com/in/danny-doan-609595223">linkedin➚</a></li>
            </ul>
          </div>

          <div className="pt-20 md:pt-24 lg:pt-28">
            <p1 className="text-l pt-4 md:pt-8 lg-12 md:text-2xl lg:text-4xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40">

            </p1>
            
          </div>
        </main>
        <footer>
          <p className="text-white text-sm md:text-md text-center">-------built with nextjs + tailwind-------</p>
        </footer>
      </body>
  
    </div>
  )
}
