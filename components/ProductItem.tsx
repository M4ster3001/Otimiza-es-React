import { memo } from "react"
import { Product } from "../pages"

type ProductItemProps = {
    product: Product
    onAddToWishList: (id: number) => void 
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {

    return (
        <div>
            {product.title} - <strong>R$ {product.price.toFixed(2)}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to wishlist</button>
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

/**
 * useMemo - memorizar um valor ou um resultado
 * é usado para calculos pesados
 * igualdade referencial (quando a repassamos aquela informação para um componente filho)
 * 
 * useCallback - memorizar uma função
 * 
 */