'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

type ItemDetailsProps = {
  category: string
  item: string
}

export function ItemDetails({ category, item }: ItemDetailsProps) {
  const [status, setStatus] = useState<'idle' | 'running' | 'stopped'>('idle')
  const [logs, setLogs] = useState<string[]>([])

  const toggleStatus = () => {
    if (status === 'running') {
      setStatus('stopped')
      addLog('Script stopped')
    } else {
      setStatus('running')
      addLog('Script started')
    }
  }

  const addLog = (message: string) => {
    setLogs(prevLogs => [...prevLogs, `[${new Date().toISOString()}] ${message}`])
  }

  useEffect(() => {
    addLog(`Initialized ${category} - ${item}`)
  }, [category, item])

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Status: {status}</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={toggleStatus}>
            {status === 'running' ? 'Stop' : 'Run'}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-black text-green-400 p-4 rounded-md h-64 overflow-y-auto font-mono text-sm">
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

