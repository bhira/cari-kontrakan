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
        <Paragraph fontSize={'20px'}>Kontrakan Terpopuler</Paragraph>
        <StyledDiv>
          <Columns templateColumn={3}>
            <Columns.Item>
              <Card
                imageSrc={`https://via.placeholder.com/300.png`}
                imageAlt={`Example Image 1`}
              >
                <Paragraph fontWeight={`700`}>
                  Rp20.000.000 / tahun
                </Paragraph>
                <Paragraph>Lokasi: Jakarta Barat</Paragraph>
              </Card>
            </Columns.Item>
            <Columns.Item>
              <Card
                imageSrc={`https://via.placeholder.com/300.png`}
                imageAlt={`Example Image 1`}
              >
                <Paragraph fontWeight={`700`}>
                  Rp20.000.000 / tahun
                </Paragraph>
                <Paragraph>Lokasi: Jakarta Barat</Paragraph>
              </Card>
            </Columns.Item>
            <Columns.Item>
              <Card
                imageSrc={`https://via.placeholder.com/300.png`}
                imageAlt={`Example Image 1`}
              >
                <Paragraph fontWeight={`700`}>
                  Rp20.000.000 / tahun
                </Paragraph>
                <Paragraph>Lokasi: Jakarta Barat</Paragraph>
              </Card>
            </Columns.Item>
          </Columns>
        </StyledDiv>
      </Container>
    </Layout>
  )
}

const StyledDiv = styled.div`
  margin-bottom: 5%;
`
