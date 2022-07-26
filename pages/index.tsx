import type { NextPage } from 'next'
import Head from 'next/head'
import TopNavigation from '../components/TopNavigation'

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-center py-2 .">
      <Head>
        <title>Dheemi Gati ka Lekhak</title>
        <link rel="icon" href="/DGKL-Logo.png" />
      </Head>
      <div className="content-container">
        <TopNavigation/>
      </div>
      <div className="mt-12 w-11/12 border-t border-black"/>

    </div>
  )
}

