"use client";

import {useEffect, useRef} from 'react'

export default async function ResumePage(){
  const viewer = useRef(null)

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path:"/lib",
          intialDoc:'/public/BenPhamResume.pdf',
        },
        viewer.current,
      ).then((instance) => {
        const {docViewer} = instance
      })
    })
  }, [])

  return (
    <>
      <div className="webviewer" ref={viewer}></div>
    </>
  )
}