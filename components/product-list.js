const productArray = [
    {
        id: "dsf",
        title: "node.js",
        description: "",
        price: 2
    },
    {
        id: "dsf",
        title: "React",
        description: "",
        price: 2
    }
]
const ProductList = () => (
    <ul>
    {productArray.map(product => (
        <li>{product.title}</li>
    ))}
    </ul>
)

export default ProductList;