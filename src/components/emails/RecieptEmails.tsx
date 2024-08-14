import { Product } from "../../payload-types"

interface ReceiptEmailProps {
    email: string,
    date: Date,
    orderId: string,
    products: Product[]
}

export const ReceiptEmail = ({
    email,
    date,
    orderId,
    products
}: ReceiptEmailProps) => {
    
}