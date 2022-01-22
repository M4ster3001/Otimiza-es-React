import React, { useMemo } from "react"
import { Product } from "../pages"
import { ProductItem } from "./ProductItem"

type SearchResultsProps = {
    results: Product[]
    onAddToWishList: (id: number) => void 
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results])


    return(
        <div>
            <h2>{totalPrice}</h2>
            {
                results.map((product, key: React.Key) => {
                    return (
                        <ProductItem key={key} product={product} onAddToWishList={onAddToWishList} />
                    )
                })
            }
        </div>
    )
}