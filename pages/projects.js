import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Danny Doan</title>
        <meta name="author" content="Danny Doancdcdgit addgi-" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/92613890?s=400&u=e0047c360a4ec70d3e487df52452decafbce4351&v=4" />
      </Head>

      <body className="bg-black flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="flex justify-end m-4 md:m-8 lg:m-16">
            <ul className="space-x-5 md:space-x-10 lg-space-x-20">
              <li className="inline"><Link href="/"><a className="hover:font-semibold text-white text-xl md:text-2xl lg:text-4xl">/home</a></Link></li>
              <li className="inline"><Link href="/projects"><a className="underline hover:font-semibold text-white text-xl md:text-2xl lg:text-4xl">/projects</a></Link></li>
              <li className="inline"><Link href="#"><a className="hover:font-semibold text-white text-xl md:text-2xl lg:text-4xl">/interests</a></Link></li>
            </ul>
          </div>
          <div clasName="flex flex-col">
            <div className="flex mt-8 md:mt-16">

                        <div className="max-w-xl rounded overflow-hidden shadow-lg ml-8 md:ml-48 mb-8 md:mb-12 pt-8">
                            <div className="font-bold text-xl md:text-3xl mb-1 text-white rounded-lg">Study Session Manager</div>
                                <a href="https://skolr.herokuapp.com/" className="hover:font-semibold text-sky-400 text-m md:text-2xl pb-2">
                                https://skolr.herokuapp.com/➚ 
                                </a>
                                <p className="text-gray-400 text-l md:text-2xl pb-2">
                                 A full-stack web application that allows users to start/stop timed study sessions. Users can create an account and log their study sessions.
                                </p>
                            
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#python</span>
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#django</span>
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
                            </div>
                        </div>

                        <div className="max-w-xl rounded overflow-hidden shadow-lg ml-8 md:ml-48 mb-8 md:mb-12">
                            <div className="font-bold text-xl md:text-3xl mb-1 text-white rounded-lg">Placeholder</div>
                                <a href="https://skolr.herokuapp.com/" className="hover:font-semibold text-sky-400 text-m md:text-2xl pb-2">
                                https://test.herokuapp.com/➚ 
                                </a>
                                <p className="text-gray-400 text-l md:text-2xl pb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        

            </div>       
                    

          

        </main>
        <footer>
          <p className="text-white text-sm md:text-md text-center">-------built with nextjs + tailwind-------</p>
        </footer>
      </body>
  
    </div>
  )
}

export default Projects