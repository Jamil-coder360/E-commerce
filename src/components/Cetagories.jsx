import React from 'react'
import Section from './section/Section'
import Container from './section/Container'
import SectionHeader from './section/SectionHeader'
import Arrows from "../components/section/Arrows"
import CameraIcon from "../components/Icons/CameraIcon"
import CetagoriesCard from './CetagoriesCard'

const Cetagories = () => {
  return (
    <Section className="pt-20 pb-17.5">
        <Container>
            <div>
              <div className='flex items-center justify-between mb-15'>

                <SectionHeader 
                title="Browse By Category"
                subtitle="Categories"
                />
                <Arrows />
              </div>
        <div>
          <CetagoriesCard />
        </div>
            </div>
        </Container>
    </Section>
  )
}

export default Cetagories