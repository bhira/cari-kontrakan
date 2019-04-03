import React from 'react'
import styled from 'styled-components'
import Layout from 'common/layout'
import Hero from 'ui/hero'
import Button from 'ui/button'
import Columns from 'ui/columns'
import Container from 'ui/container'
import Paragraph from 'ui/paragraph'
import Card from 'ui/card'

export default function() {
  return (
    <Layout>
      <Hero
        title="Temukan kontrakan/rumah sewa yang sesuai dengan kebutuhan anda"
        extra={<Button>Daftarkan rumah kontrakan anda!</Button>}
      />
      <Container>
        <Paragraph fontSize={'25px'} fontWeight={`700`}>Kontrakan Terpopuler</Paragraph>
        <StyledDiv>
          <Columns templateColumn={3}>
            {[...Array(10).keys()].map(function(index) {
              return (
                <Columns.Item key={String(index)} to={`/detail/${index}/example-image-${index}`}>
                  <Card
                    imageSrc={`http://danlawrie.com/wp-content/uploads/original.jpg`}
                    imageAlt={`Example Image ${index}`}
                  >
                    <Paragraph fontWeight={`700`}>
                      Rp20.000.000 / tahun
                    </Paragraph>
                    <Paragraph>Lokasi: Jakarta Barat</Paragraph>
                  </Card>
                </Columns.Item>
              )
            })}
          </Columns>
        </StyledDiv>
      </Container>
    </Layout>
  )
}

const StyledDiv = styled.div`
  margin-bottom: 5%;
`
