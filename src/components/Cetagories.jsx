import React from 'react'
import Section from './section/Section'
import Container from './section/Container'
import SectionHeader from './section/SectionHeader'

const Cetagories = () => {
  return (
    <Section>
        <Container>
            <div>
                <SectionHeader 
                title="Browse By Category"
                subtitle="Categories"
                />
            </div>
        </Container>
    </Section>
  )
}

export default Cetagories