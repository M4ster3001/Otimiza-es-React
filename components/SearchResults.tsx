import React, { useMemo } from "react"
import { List, ListRowRenderer } from "react-virtualized"
import { Product } from "../pages"
import { ProductItem } from "./ProductItem"

type SearchResultsProps = {
    totalPrice: number
    results: Product[]
    onAddToWishList: (id: number) => void 
}

export function SearchResults({ results, totalPrice, onAddToWishList }: SearchResultsProps) {
    // const totalPrice = useMemo(() => {
        
    // }, [results])

    const rowRender: ListRowRenderer = ({index, key, style}) => {
        return (
            <div key={key} style={style}>
                <ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
            </div>
        )
    }


    return(
        <div>
            <h2>{totalPrice}</h2>
            <List height={300} rowHeight={30} width={900} overscanRowCount={5} rowCount={results.length} rowRenderer={rowRender} />
        </div>
    )
}