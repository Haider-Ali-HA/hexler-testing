'use client'
import CmnBanner from '@/components/layout/banner/CmnBanner'
import Career from '@/components/layout/careers/Career'
import CustomCursor from '@/components/layout/CustomCursor'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import TopHeader from '@/components/layout/header/TopHeader'
import Projects from '@/components/layout/projects/Projects'
import ScrollProgressButton from '@/components/layout/ScrollProgressButton'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="Our Projects" />
      <Projects />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  )
}

export default page
