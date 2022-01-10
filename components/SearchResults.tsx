import React from "react"
import { Product } from "../pages"
import { ProductItem } from "./ProductItem"

type SearchResultsProps = {
    results: Product[]
}

export function SearchResults({ results }: SearchResultsProps) {
    console.log(results)
    return(
        <div>
            {
                results.map((product, key: React.Key) => {
                    return (
                        <ProductItem key={key} product={product} />
                    )
                })
            }
        </div>
    )
}