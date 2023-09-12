import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentHomePage() {
  return (
    <>
    <h1>Welcome NameFetched </h1>
    <Link to='/calendar'>Calendar </Link>
    <Link to='/progress'>Progress </Link>
    <Link to='/account'>Account </Link>
    </>
  )
}
