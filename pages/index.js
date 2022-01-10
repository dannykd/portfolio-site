import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



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
              <li className="inline"><a href="#" className="text-white text-xl md:text-2xl lg:text-4xl">/home</a></li>
              <li className="inline"><a href="#" className="text-white text-xl md:text-2xl lg:text-4xl">/projects</a></li>
              <li className="inline"><a href="#" className="text-white text-xl md:text-2xl lg:text-4xl">/interests</a></li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40">
              hey, i&apos;m danny.    
            </h1>
            <p4 className="text-xl pt-4 md:pt-8 lg-12 md:text-2xl lg:text-4xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40">
              20y/o california based developer studying computer science @uci.
            </p4>

            <ul className="text-xl pt-4 md:pt-8 lg-12 md:text-2xl lg:text-4xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40 
            space-x-4 md:space-x-8 lg-space-x-16 underline">
              <li className="inline"><a href="mailto:dannykdoan@gmail.com">email➚</a></li>
              <li className="inline"><a href="https://github.com/dkdoan">github➚</a></li>
              <li className="inline"><a href="https://www.linkedin.com/in/danny-doan-609595223">linkedin➚</a></li>
            </ul>
          </div>

          <div className="pt-20 md:pt-24 lg:pt-28">
            <p1 className="text-l pt-4 md:pt-8 lg-12 md:text-2xl lg:text-4xl text-white pl-2 md:pl-10 lg:pl-30 xl:pl-40">
              also, here&apos;s a picture of my cat &lt;3</p1>
            <img className="pt-4 h-72 pl-2 md:pl-10 lg:pl-30 xl:pl-40" src="/rue_for_site.jpg"/>
          </div>
        </main>
        <footer>
          <p className="text-white text-sm md:text-md text-center">-------built with nextjs + tailwind-------</p>
        </footer>
      </body>
  
    </div>
  )
}
