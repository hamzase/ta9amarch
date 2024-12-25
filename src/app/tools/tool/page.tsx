import { ItemDetails } from '@/app/components/item-details'

export default function ToolPage({ params }: { params: { tool: string } }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold capitalize">{params.tool}</h1>
      <ItemDetails category="Tools" item={params.tool} />
    </div>
  )
}

