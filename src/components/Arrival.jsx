import React from 'react'
import Section from './section/Section'
import Container from './section/Container'
import SectionHeader from './section/SectionHeader'

const Arrival = () => {
  return (
   <Section>
    <Container>
        <div>
            <div className='flex items-center justify-center'>
            <SectionHeader title="New Arrival"
            subtitle="Featured"
             />
            </div>
        </div>
    </Container>
   </Section>
  )
}

export default Arrival