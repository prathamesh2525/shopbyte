import { useTitle } from "../Hooks/useTitle"
import { CartItem } from "../components/CartItem"
// import Image1 from "../assets/images/1001.png"
// import Image2 from "../assets/images/1002.png"

export const Cart = ({ title }) => {
  const products = [
    {
      id: 1,
      name: "SonyWh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boat Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ]

  useTitle(title)
  return (
    <main className="h-screen">
      <section className="max-w-7xl mx-auto my-10 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-bold">Cart Items: {products.length}</p>

          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
