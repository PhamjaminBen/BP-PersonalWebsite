"use client"
import { useState } from "react"

export default function Form(){
  const [name, setName] = useState('')
  return (
    <>
      <label>
        Name:
        <input value = {name} onChange={n => setName(n.target.value)}/>
      </label>
    </>
  )
}