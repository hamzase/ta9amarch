export default function MonitoringPage({ params }: { params: { type: string } }) {
    return (
      <div>
        <h1 className="text-3xl font-bold capitalize">Monitoring: {params.type}</h1>
        <p className="mt-4">This is a placeholder page for {params.type} monitoring.</p>
      </div>
    )
  }
  
  