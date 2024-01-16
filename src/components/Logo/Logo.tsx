import React from 'react'

export const Logo = () => {
  const [spaceHeld, setSpaceHeld] = React.useState(false)

  const downHandler = ({ code }: KeyboardEvent) => {
    if (code === 'Space') {
      setSpaceHeld(true)
    }
  }

  const upHandler = ({ code }: KeyboardEvent) => {
    if (code === 'Space') {
      setSpaceHeld(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  return (
    <div className="flex flex-row items-center font-handjet font-normal">
      <h1 className="text-5xl mr-2">Pinbaile {spaceHeld ? 'pull' : ' '}</h1>
      <div className="w-7 h-7 rounded-2xl bg-white"></div>
    </div>
  )
}

export const TextLogo = ({ className }: { className?: string }) => (
  <div
    className={className}
    style={{ border: '1px solid #FFFFFF', borderRadius: '9999px' }}
  >
    <div style={{ lineHeight: 1 }}>***</div>
    <div style={{ lineHeight: 1 }}>********</div>
    <h1 style={{ letterSpacing: '-0.01rem' }}>*pinbaile*</h1>
    <div style={{ lineHeight: 1 }}>********</div>
    <div style={{ lineHeight: 1 }}>***</div>
  </div>
)

interface PinbaileLogoProps {
  className?: string
  fill?: string
  width?: number
  stroke?: string
}

export const PinbaileLogo = ({
  className,
  fill = 'none',
  width = 50,
  stroke = 'none'
}: PinbaileLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      xmlSpace="preserve"
      width={width}
      stroke={stroke}
      strokeWidth={0}
      viewBox="0 0 2076.79 850.61"
    >
      <path
        fill={fill}
        d="m1555.94,317.5c-4.42,0-8,3.58-8,8v255c0,4.42,3.58,8,8,8s8-3.58,8-8v-255c0-4.42-3.58-8-8-8Z"
      />
      <path
        fill={fill}
        d="m345.64,346.53c-3.95-12.88-11.39-24.51-19.92-35.5-8.12-10.47-17.22-20.35-25.22-30.18-12.79-15.72-25.58-31.45-38.37-47.17l-.2-.24-101,55-30-55-82,43,30,55v463.07l94-46.07v-156l72.24-6.88c9.34-.89,18.48-3.37,26.96-7.4,35.88-17.05,56.35-44.01,67.78-71.95.41-.76.83-1.56,1.25-2.4,11.89-23.47,14.74-50.46,14.29-76.43-.45-26.28-2.11-55.67-9.83-80.86Zm-172.7,200.9v-223l66-35c46.06,53.47,53.07,106.08,55.69,121.89.41,2.44.62,4.91.58,7.38-1.83,139.69-122.28,128.73-122.28,128.73Z"
      />
      <polygon
        fill={fill}
        points="353.44 276.43 382.44 332.43 382.44 632.43 477.44 632.43 477.44 313.43 434.44 233.43 353.44 276.43"
      />
      <path
        fill={fill}
        d="m683.94,236.5c-34.44.77-66.19,42.89-71.4,49.26l-29.6-54.26-82,43,30,55v302.93h94v-219.63c0-9.71.23-20.59,0-30.3-1-42,8.63-63.04,35-79,38-23,73,15,63,187-8.88,152.79-61,225-61,225,80-36,138-128.86,138-260,0-144-26-221-116-219Z"
      />
      <path
        fill={fill}
        d="m1107.94,452.5c.04-2.28-95-184-95-184l-91.49,48,.49-169-43-80-82,43,30,55v466.93h82.7c4.17.05,8.33-.55,12.32-1.76l31.97-12.17,128-91,26-75Zm-169,100h-18v-80l.46-128.83,23.54,44.83,35-19,53,110-94,73Z"
      />
      <polygon
        fill={fill}
        points="1407.94 276.43 1436.94 332.43 1436.94 632.43 1531.94 632.43 1531.94 313.43 1488.94 233.43 1407.94 276.43"
      />
      <path
        fill={fill}
        d="m1750.92,563.63c-5.59,4.52-29.89,19.8-45.98,23.73-8.96,2.19-19.57,3.93-26.26-3.98-8.18-9.69-5.69-29.19-5.54-41.02.89-70.18.31-140.38.31-210.57v-34.43l.49-169-43-80-82,43,30,55v389.91c0,.7.03,1.38.05,2.07,0,0-1.05,42.01,10.95,67.01,11.23,18.66,41,28,64,27,29.38,0,95.19-35.48,97.91-67.94.06-.69.09-1.63-.93-.8Z"
      />
      <path
        fill={fill}
        d="m1893.11,571.3c-19.02,0-32.72-6.69-44.41-21.69-38.25-49.08-37.05-65.29-34.76-69.98,1.62-3.32,6.03-5,13.1-5,.29,0,.59,0,.89,0,5.42.11,11.11.22,16.94.34,26.93.55,57.46,1.17,75.39,1.17,6.99,0,19.82-7.98,38.12-23.72,6.38-5.49,12.89-11.52,17.86-16.55,8.36-8.46,8.98-10.47,8.98-12.57,0-1.49-.63-2.92-1.72-3.9-.97-.87-2.23-1.35-3.56-1.35-1.6,0-11.45-.29-23.93-.66-28.67-.85-76.65-2.27-95.63-2.27-7.19,0-34.65.23-47.46.34.53-1.92,1.04-3.83,1.33-5.02,3.46-14.18,9.54-28.75,15.79-41.91,6.86-14.44,16.28-30.53,34.21-30.81,7.48-.12,14.82,2.3,21.42,5.82,6.6,3.52,33.94,24.62,41.58,30.52,3.9,3.01,7.8,6.02,11.7,9.03,3.16,2.44,6.86,4.73,9.78,7.52.48.46,1.22.52,1.75.1,5.37-4.2,11.06-8.13,16.56-12.19,9.06-6.68,18.11-13.36,27.17-20.04,1.63-1.2,3.26-2.4,4.89-3.61.38-.28.43-.82.12-1.16-.64-.71-1.66-1.82-2.27-2.49-11.09-12.08-22.46-23.95-34.12-35.48-19.74-19.52-41.43-37.66-70.98-34.7-11.32,1.14-22.26,4.67-32.86,8.8-39.34,15.32-71.64,40.27-92.2,77.57-10.67,19.36-18.04,40.42-23.12,61.88-6.23,26.32-6.28,53.49-.64,80.01,3.33,15.63,8.65,30.85,15.98,45.07,18.32,35.52,50.67,65.22,90.21,74.77,6.14,1.48,12.42,2.37,18.73,2.65,22.4.98,45.92-4.9,66.56-13.3,16.37-6.67,31.75-15.87,45.05-27.54.63-.55,1.25-1.11,1.87-1.67,21.7-19.71,29.79-38.67,30.13-39.46l4.22-10.08-10.39,3.4c-.52.17-52.01,16.99-67.66,20.9-17.5,4.37-31.78,7.29-44.62,7.29Z"
      />
      <path
        fill={fill}
        d="m272.58,412.81c-2.44-15.02-8.14-50.2-35.3-89.59-2.31-3.34-6.75-4.43-10.33-2.53l-27.76,14.72c-2.62,1.39-4.25,4.11-4.25,7.07v172.48c0,2.45,1.12,4.76,3.04,6.27,1.43,1.13,3.18,1.73,4.96,1.73.61,0,1.23-.07,1.84-.21,30.69-7.26,67.48-31.25,68.44-104.33.01-1.08-.08-2.25-.29-3.47l-.35-2.14Zm-61.64,91.37v-156.88l17.11-9.07c21.75,34.01,26.6,63.95,28.75,77.16l.35,2.17c.07.44.07.65.07.66-.6,45.66-16.15,74.52-46.28,85.97Z"
      />
      <path
        fill={fill}
        d="m1232.32,470.09l-3.21-8.61c-1.17-3.15-4.15-5.21-7.54-5.21-3.36.02-6.35,2.13-7.48,5.29l-10.44,29.06c-.14.39-.25.78-.33,1.18l-2.01,10.37c-.93,4.8,3.45,11.21,5.77,15.19,2.93,5.03,6.42,9.73,10.41,13.97,4.88,5.19,10.74,9.82,17.67,11.5,7.35,1.78,23.46-1.65,19.44-12.51-8.02-21.68-21.85-59.07-22.28-60.23Zm2.8,55.5c-5.83-3.25-10.15-9.02-13.41-14.7-3.01-5.23-4.94-9.49-2.8-15.44,0,0,2.83-7.86,2.83-7.86,4.69,12.67,10.5,25.42,14.15,38.41-.26-.13-.51-.27-.77-.41Z"
      />
      <path
        fill={fill}
        d="m1867.04,358.81c-.76-.21-1.54-.31-2.3-.31-2.37,0-4.67.98-6.32,2.78-2.94,3.2-6.11,8.24-9.43,14.97-.92,1.87-1.87,3.91-2.81,6.04-1.18,2.66-.92,5.74.67,8.18,1.59,2.42,4.29,3.88,7.18,3.88h.04c2.21-.01,4.02-.02,5.27-.02,7.27,0,19.18.19,35.41.58.07,0,.14,0,.2,0,3.58,0,6.79-2.22,8.04-5.58,1.28-3.43.25-7.29-2.57-9.62-17.43-14.44-27.78-19.33-33.39-20.89Zm-7.67,23.51c.13-.26.25-.52.38-.78,2.63-5.34,4.71-8.58,6.12-10.47,3.33,1.3,9.39,4.38,18.99,11.6-11.21-.23-19.76-.35-25.5-.35Z"
      />
      <path
        fill={fill}
        d="m969.04,403.28c-2.08-.67-4.35-.46-6.27.58l-15.45,8.39c-2.57,1.39-4.17,4.08-4.18,7l-.19,53.31v32.65c0,3.05,1.74,5.84,4.48,7.19,1.12.55,2.32.81,3.52.81,1.74,0,3.48-.57,4.91-1.68l44.45-34.52c2.98-2.31,3.94-6.39,2.3-9.79l-28.81-59.79c-.95-1.97-2.67-3.47-4.75-4.14Zm-10.1,85.58v-16.27l.17-48.54,3.9-2.12,22.36,46.4-26.44,20.53Z"
      />
      <path
        fill={fill}
        d="m2074.67,485.41c-2.12-2.3-5.39-3.15-8.37-2.18l-72.74,23.77c-13.05,4.27-53.01,17.14-65.05,20.15-12.78,3.2-25.92,6.15-35.4,6.15-7.27,0-9.97-1.32-14.44-7.05-3.47-4.46-6.68-8.73-9.59-12.78,19.06.37,38.22.68,51.19.68,17.49,0,35.71-9.54,62.9-32.91,7.13-6.13,14.46-12.93,20.12-18.66,8.42-8.52,19.94-20.19,19.94-39.28,0-10.79-4.05-21.17-11.24-29.09,3.86-2.79,6.8-5.01,7.3-5.4l30.56-23.25c1.79-1.36,2.92-3.42,3.12-5.66.2-2.24-.55-4.46-2.08-6.12l-25.96-28.28c-18.74-20.42-52.89-56.33-70.97-67.44l-.79-.49c-.12-.07-.24-.15-.37-.21l-.76-.41c-17.52-9.55-36.23-14.39-55.63-14.39-18.36,0-36.67,4.35-54.38,12.91-28.35,13.46-49.7,25.07-68.55,41.35-14.53,12.55-26.7,27.54-35.97,44.35-5.1,9.25-8.89,18.99-13.16,28.62-2.33,5.26-4.74,10.49-6.99,15.79-1.13,2.65-2.22,5.31-3.25,8-.8,2.08-2.66,5.38-2.66,7.52v-103.63l.51-176.6c0-1.33-.32-2.64-.95-3.81l-60.66-112.85c-2.08-3.86-6.88-5.33-10.76-3.3l-135.31,70.95c-1.9,1-3.32,2.71-3.94,4.77-.62,2.05-.39,4.27.63,6.15l39.96,73.26v93.86l-32.66-60.76c-2.08-3.88-6.91-5.34-10.8-3.28l-133.59,70.92c-3.87,2.06-5.37,6.85-3.35,10.74l38.4,74.15v214.93c-4.51-7.57-10-18.22-16.28-33.1-12.78-30.28-25.89-70.85-38.95-120.58-22.56-85.9-37.17-170.11-37.32-170.95l-7.04-40.89c-.44-2.53-2.06-4.7-4.36-5.83-2.31-1.13-5.01-1.08-7.28.12l-110.33,58.74c-6.14,3.27-16.41,8.75-21.31,22.77l-.08.23s-.03.08-.04.12l-39.23,118.38c-6.38-12.36-13.93-26.92-22.54-43.5-23.41-45.04-47.33-90.79-47.56-91.23l-13.92-26.62c-.98-1.88-2.68-3.29-4.7-3.93-2.03-.63-4.22-.44-6.1.55l-62.25,32.66.33-113.54c0-1.33-.32-2.64-.95-3.81l-60.66-112.85c-2.08-3.86-6.88-5.33-10.76-3.3l-135.31,70.95c-1.9,1-3.32,2.71-3.94,4.77-.62,2.05-.39,4.27.63,6.15l39.96,73.27v66.24c-7.91-9-16.77-16.63-26.49-22.8-21.05-13.38-46.33-20.16-75.12-20.16-1.4,0-2.81.02-4.24.05-20.55.46-41.24,8.63-61.6,24.32l-19.33-35.43c-2.09-3.83-6.87-5.28-10.74-3.25l-109.48,57.41-28.17-52.4c-2.08-3.88-6.91-5.34-10.8-3.28l-119.25,63.31-48.04-59.07c-2.43-2.99-6.65-3.82-10.03-1.98l-89.54,48.76-25.95-47.57c-2.09-3.83-6.87-5.28-10.74-3.25L4.28,256.94c-1.9,1-3.32,2.71-3.94,4.77-.62,2.05-.39,4.27.63,6.15l39.96,73.26v501.49c0,2.76,1.42,5.33,3.77,6.79,1.29.81,2.76,1.21,4.23,1.21,1.2,0,2.41-.27,3.52-.82l154-75.47c2.74-1.34,4.48-4.13,4.48-7.18v-140.15l37.84-3.6c13.88-1.32,27.23-4.99,39.67-10.9,21.98-10.45,40.74-24.47,55.99-41.83v91.79c0,4.42,3.58,8,8,8,0,0,291.12,0,291.12,0-11.34,23.96-28.46,44.47-44.15,65.65-11.58,15.63-23.15,31.26-34.73,46.89-.57.77-1.14,1.53-1.71,2.3-2.17,2.93-2.08,6.94.2,9.78s6.19,3.77,9.51,2.28l104.84-47.18c44.97-20.24,83.28-54.69,111.41-100.02v12.3c0,4.42,3.58,8,8,8h113.16c7.77,0,15.47-1.14,22.9-3.4l.99-.3c.18-.05.35-.11.52-.18l36.53-13.9c.63-.24,1.24-.56,1.79-.96l72.88-51.82-2.41,7.28c-.84,2.02-2.33,5.6-3.35,8.04,0,0-.87,2.09-.87,2.09-7.89,18.91.52,41.39,19.21,50.29.1.04.19.09.29.13,8.55,3.93,19.83,3.53,28.65.63,9.18-3.02,17.26-8.84,24.72-14.82.02-.01.03-.03.05-.04,6.78-5.44,12.64-12.25,19.48-17.49,16.17,14.47,35.84,25.99,57.11,30.95,13.06,3.05,26.58,3.59,39.99,3.35,13.16-.24,26.49-1.25,38.9-5.61,10.47-3.67,19.94-9.6,28.96-15.96,2.18-1.54,4.29-3.17,6.48-4.69,3.1-2.15,3.51-1.75,6.37.6,4.38,3.61,8.88,7,13.7,9.99,12.97,8.03,27.9,13.51,43.18,14.61,1.52.11,3.04.18,4.57.18h.48c9.9-.03,19.29-1.58,28.06-4.62,1.01,3.26,4.05,5.63,7.64,5.63h155c4.42,0,8-3.58,8-8v-21.86c21.35,20.5,53.89,29.86,80.61,29.86,1.42,0,2.86-.03,4.28-.08,25.97-.31,57.49-14.49,78.36-27.66,10.74-6.78,20.11-14.03,27.98-21.61,6.69,6.59,13.84,12.62,21.35,17.98,35.85,25.59,80.35,37.19,123.66,27.19,36.04-8.32,69.62-21.68,97.85-46.23,1-.87,1.99-1.75,2.97-2.64,26.85-24.39,37.72-48.35,39.62-52.9l29.57-70.56c1.21-2.89.62-6.21-1.5-8.52Zm-42.83,72.9c-1.68,4.01-11.28,25.12-35.62,47.24-24.3,22.07-54.73,36.55-86.66,43.61-21.31,4.72-41.86,6.76-63.27,1.65-19.56-4.67-38.11-13.08-54.48-24.77-8.86-6.32-17.19-13.68-24.75-21.87-1.51-1.64-3.64-2.57-5.88-2.57h-.03c-2.24,0-4.38.96-5.89,2.62-7.95,8.74-18.25,17.14-30.62,24.95-19.04,12.02-47.44,24.96-70.09,25.19-.07,0-.15,0-.22,0-1.25.05-2.52.07-3.78.07-28.25,0-63.78-11.67-79.46-37.73l-.54-.89-.45-.93c-.3-.62-.58-1.24-.87-1.89-1.54-3.44-5.28-5.34-8.97-4.55-3.69.79-6.32,4.05-6.32,7.82v38.17h-139v-1.67c0-2.81-1.48-5.42-3.89-6.86-2.41-1.44-5.4-1.52-7.88-.19-9.52,5.08-20.28,7.68-32.04,7.72h-.37c-5.23,0-32.64-1.35-58.61-27.99-7.61-7.8-19.83,6.68-25.84,10.88-9.6,6.69-19.98,12.54-31.4,15.43-9.68,2.45-19.76,2.69-29.75,2.64-10.57-.06-21.2-.45-31.53-2.68-12.19-2.62-23.71-7.79-34.19-14.5-5.19-3.32-10.13-7.02-14.83-11.01-3.81-3.23-8.22-9.7-13.68-9.57-2.18.05-4.25.99-5.72,2.61l-.1.11c-7.12,7.71-15.33,15.4-23.13,21.66-9.42,7.56-20.18,15.17-32.93,13.07-.88-.15-1.76-.33-2.61-.62-7.63-2.6-12.77-9.74-14-17.55-1.65-10.4,4.84-19.77,7.9-29.26,2.32-7.2,4.76-14.36,7.14-21.54.37-1.13.75-2.25,1.12-3.38,1.09-3.28-.06-6.9-2.84-8.95-2.78-2.06-6.57-2.09-9.39-.09l-91.97,65.38-35.31,13.44-.73.22c-5.92,1.8-12.06,2.71-18.25,2.71h-105.16v-35.46c0-3.73-2.58-6.96-6.21-7.8-3.64-.84-7.36.95-8.99,4.31-2.78,5.74-5.69,11.3-8.66,16.54-26.87,47.41-64.95,83.21-110.11,103.54,0,0-76.88,34.6-76.88,34.6,14.55-19.65,30.47-38.28,44.24-58.51,13.13-19.29,23.17-40.17,31.29-62.02,11.92-32.05,27.03-85.89,31.36-160.42,1.23-21.18,1.93-42.41,1.64-63.62-.2-15.17-.89-30.36-2.55-45.45-1.12-10.17-2.66-20.34-5.11-30.28-1.43-5.81-3.19-11.56-5.61-17.03-2.04-4.61-4.73-11.67-10.41-12.67-5.97-1.06-13.73,5.82-17.87,9.74-4.07,3.86-7.21,8.52-9.33,13.7-4.89,11.97-5.12,25.64-4.82,38.36.16,6.85.11,14.09.06,21.11v.32c-.03,3.2-.05,6.35-.05,9.39v241.63h-136v-306.93c0-4.42-3.58-8-8-8s-8,3.58-8,8v306.93h-134.5v-107.58c0-3.54-2.33-6.66-5.73-7.67-3.4-1.01-7.05.34-8.98,3.31-15.61,24.04-37.19,42.72-64.15,55.53-10.75,5.11-22.3,8.28-34.32,9.43l-45.08,4.29c-4.11.39-7.24,3.84-7.24,7.96v142.44l-138,67.63v-490.7c0-1.34-.34-2.66-.98-3.83l-37.05-67.92,120.97-63.44,26.01,47.68c2.12,3.88,6.97,5.31,10.85,3.19l90.73-49.41,47.99,59.01c2.41,2.96,6.58,3.81,9.96,2.02l118.03-62.66,28.15,52.36c2.08,3.86,6.88,5.33,10.76,3.3l109.53-57.43,20.18,36.99c1.16,2.13,3.22,3.61,5.6,4.04,2.38.43,4.83-.24,6.66-1.83,19.93-17.27,39.82-26.24,59.12-26.67,1.31-.03,2.6-.04,3.88-.04,25.71,0,48.09,5.94,66.54,17.66,14.26,9.06,26.46,21.82,36.23,37.9,1.86,3.07,5.54,4.51,8.99,3.55,3.45-.97,5.84-4.12,5.84-7.7v-92.72c0-1.34-.34-2.66-.98-3.83l-37.05-67.92,121.09-63.5,55.95,104.09-.36,124.79c0,2.81,1.45,5.41,3.85,6.86,2.4,1.46,5.38,1.55,7.87.24l66.91-35.11,10.21,19.52c.23.44,24.14,46.17,47.54,91.2,12.92,24.87,23.43,45.18,31.23,60.36,1.47,2.87,4.52,4.57,7.73,4.32,3.21-.25,5.96-2.4,6.98-5.46l45.19-136.39.06-.17c2.84-8.12,8.38-11.07,13.73-13.93l100.56-53.53,5.16,29.99c.15.85,14.88,85.74,37.61,172.3,13.26,50.47,26.61,91.77,39.68,122.74,16.06,38.05,28.16,51.71,33.94,56.47,2.39,1.97,5.7,2.38,8.5,1.06,2.8-1.32,4.58-4.14,4.58-7.23v-240.29c0-1.28-.31-2.54-.9-3.68l-35.65-68.85,119.57-63.47,43.94,81.74c1.74,3.23,5.44,4.87,9,3.97,3.56-.9,6.05-4.09,6.05-7.76v-127.69c0-1.34-.34-2.66-.98-3.83l-37.05-67.92,121.09-63.5,55.95,104.09-.5,174.6v230.24c0,6.5-.02,13-.05,19.5-.01,3.27-.31,6.69-.05,9.95.09,1.12.4,2.17.97,3.17.28.5,2.47,2.42,2.47,2.67,2.21,1.5,5.03,1.8,7.51.79,7.99-3.25,17.01-8.44,20.51-10.52,3.33-1.98,4.77-6.07,3.4-9.7-9.01-23.91-13.5-49.24-13.36-75.27.03-5.55.28-11.1.74-16.62,1.51-18.11,5.54-35.74,11.97-52.68,7.75-20.44,16.14-40.83,27.88-59.35,11.34-17.88,26.84-32.45,44.41-44.15,14.91-9.93,30.99-17.79,47.09-25.57,29.68-14.35,66.12-15.97,95.12,1.15,9.68,5.72,18.04,13.38,26.16,21.16,21.72,20.81,41.95,43.04,62.28,65.18.23.25.45.49.68.74l-23.57,17.93c-.81.61-8.09,6.14-15.12,10.83-2.25,1.5-3.59,4.04-3.56,6.74.03,2.7,1.42,5.21,3.7,6.66,1.27.81,2.49,1.74,3.6,2.74,5.72,5.16,9,12.54,9,20.25,0,12.51-7.79,20.4-15.33,28.03-5.37,5.43-12.35,11.91-19.17,17.77-23.67,20.36-39.37,29.04-52.47,29.04-16.37,0-42.83-.51-66.34-.98-.05,0-.11,0-.16,0-2.88,0-5.55,1.56-6.97,4.08-1.45,2.57-1.36,5.72.22,8.21,5.02,7.9,11.42,16.86,19.04,26.63,7.51,9.63,14.84,13.21,27.06,13.21,11.21,0,25.51-3.19,39.28-6.63,12.5-3.12,52.95-16.15,66.14-20.47l56.12-18.34-22.81,54.44Zm-1368.91-176.71c-.57-23.79,2.83-33.56,8.14-39.25,1.62-1.73,4.51-1.08,5.3,1.16,5.84,16.54,13.79,56.18,8.64,144.79-3.24,55.78-12.65,99.54-22.06,130.89v-206.38c0-3,.02-6.12.05-9.28v-.33c.06-7.12.11-14.49-.06-21.6Z"
      />
      <path
        fill={fill}
        d="m1268.94,238.42s-76.99,40.98-77,41l-113,341c-.8,1.93-5.06,12.14-5,12,4.1.46,21.44-13.31,35-28,5.31-5.75,10.31-11.79,15.04-18.03,1.6-2.11,3.72-6.71,6.16-7.74,10.45,15.79,25.84,30.03,41.73,40.24,7.45,4.79,15.49,8.84,24.11,10.89,7.09,1.69,14.43,1.99,21.72,2.28,11.84.48,23.97.92,35.24-2.74,9.03-2.93,17.02-8.36,24.66-14,8.56-6.32,16.85-13,24.76-20.11,2.06-1.86,4.06-3.79,6.11-5.66,2.52-2.3,2.48-2.37,4.28.54,2.4,3.87,4.89,7.67,7.68,11.28,11.38,14.7,30.56,30.55,50.51,30.04,28,0,37.2-19.99,37.2-19.99.11-.11.33-.43.18-.42-74.37,5.4-139.37-372.6-139.37-372.6Zm9.79,303.3c-5.16,8.21-11.91,15.79-20.81,20.01-10.7,5.08-23.53,4.66-34.53.28-11-4.38-20.26-12.45-27.46-21.85-8.27-10.82-19.22-26.75-16.46-40.97,0,0,2.29-11.85,2.29-11.85.26-1.33.62-2.64,1.08-3.91l32.09-89.31,5.95-14.68c.2-.5.89-.53,1.14-.05,0,0,30.91,83.02,30.91,83.02,5.66,15.2,11.26,30.43,16.88,45.64,3.29,8.88,6.57,17.77,9.86,26.65.55,1.48.85,2.33.84,3.12-.01,1.02-.55,1.92-1.79,3.89Z"
      />
    </svg>
  )
}
