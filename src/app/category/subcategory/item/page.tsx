export default function ItemPage({ params }: { params: { category: string; subcategory: string; item: string } }) {
    return (
      <div>
        <h1 className="text-3xl font-bold">
          {params.category} - {params.subcategory} - {params.item}
        </h1>
        <p className="mt-4">
          This is a placeholder page for the {params.item} item in the {params.subcategory} subcategory of {params.category}.
        </p>
      </div>
    )
  }
  
  