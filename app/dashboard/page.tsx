'use client'
import React from 'react'
import { toast } from 'react-toastify';
export default function DashboardPage() {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <h1>DashboardPage</h1>
      <button onClick={notify}>Notify !</button>
    </div>
  )
}
