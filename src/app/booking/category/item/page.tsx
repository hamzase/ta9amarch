import { ItemDetails } from '@/app/components/item-details'

export default function BookingItemPage({ params }: { params: { category: string; item: string } }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold capitalize">
        Booking - {params.category} - {params.item}
      </h1>
      <ItemDetails category={params.category} item={params.item} />
    </div>
  )
}

