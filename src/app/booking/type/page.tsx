export default function BookingPage({ params }: { params: { type: string } }) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Booking: {params.type}</h1>
        <p className="mt-4">This is a placeholder page for {params.type} booking.</p>
      </div>
    )
  }
  
  