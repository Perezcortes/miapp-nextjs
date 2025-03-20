interface ProductProps {
    params: {
        product: string
    }
}
export default function Producto(props: ProductProps){
    console.log(props);
    const {product} = props.params;

    return (
        <h1>Productos {product}</h1>
    )
}