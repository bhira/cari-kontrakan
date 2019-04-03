import React from 'react'
import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'

function getMap() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWRpYXRtYTkwMjQiLCJhIjoiY2p1MTlxZXpvMDZvMTN6bG5taGt1aXlvZSJ9.ZPnTuS6UYMhEUp8Wdr2Udg'
  return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    zoom: 13,
    center: [4.899, 52.372],
  })
}

export default function Map(props) {
  React.useEffect(function() {
    let map = getMap()
    return () => map.remove()
  }, [])

  return <MapStyled id="map" {...props} />
}

const MapStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
`
