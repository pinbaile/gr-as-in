declare module '*.svg' {
  import React = require('react')
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

type Machine = {
  name: string
  url: string
  manufacturer: string
  year: string
  location: string
  howTo: string
  locationUrl?: string
}

type Tournament = {
  startLocal: string
  name: string
  tournamentId: string
}

interface FetchedData<T> {
  data: T | undefined
  isLoading: boolean
  isError: boolean
}

declare module '*.jpg'
