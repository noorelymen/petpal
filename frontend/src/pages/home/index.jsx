import React from 'react'
import BaseLayout from '../../components/layouts/base'
import Hero from '../../components/hero'
import Categories from  '../../components/categories'
import Filters from  '../../components/filters'
import PetList from '../../components/petlist'

export default function Home() {
  return (
    <BaseLayout>
        <Hero />
        <Categories/>
        <Filters/>
        <PetList/>
    </BaseLayout>
  )
}

