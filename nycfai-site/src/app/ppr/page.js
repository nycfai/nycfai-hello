'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function PPRPage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('PPR') // use your actual Supabase table name here
        .select('*')

      if (error) {
        console.error('Error fetching projects:', error)
      } else {
        setProjects(data)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Project Progress Report</h1>
      <table border="1" cellPadding="6" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {projects.length > 0 &&
              Object.keys(projects[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {projects.map((row) => (
            <tr key={row.id}>
              {Object.values(row).map((val, idx) => (
                <td key={idx}>{String(val)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
