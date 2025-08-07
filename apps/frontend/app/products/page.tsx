import LatestProducts from '@/components/LatestProducts'
import React from 'react'

export interface ICategoryProps {
  searchParams: Record<string, string | string[] | undefined>;
}

function page({searchParams}: ICategoryProps) {
  return (
    <>
    <LatestProducts searchParams={searchParams}/>
    </>
  )
}

export default page