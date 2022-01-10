import { memo } from "react"
import { Product } from "../pages"

type ProductItemProps = {
    product: Product
}

function ProductItemComponent({ product }: ProductItemProps) {

    return (
        <div>
            {product.title} - <strong>R$ {product.price.toFixed(2)}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})

/**
 * Quando utilizar o memo
 * 
 * Pure functional components - cannot be connected to something external to the application
 * Renders too often
 * Re-renders with same props
 * Medium to big size components
 */