import { useTitle } from "../Hooks/useTitle"
// import Image1 from "../assets/images/1001.png"
// import Image2 from "../assets/images/1002.png"
// import Image3 from "../assets/images/1003.png"
// import Image4 from "../assets/images/1004.png"
// import Image5 from "../assets/images/1005.png"
// import Image6 from "../assets/images/1006.png"
import { products } from "../components/"
import { Card } from "../components/Card"

export const Main = ({ title }) => {
  useTitle(title)
  return (
    <main className="h-[90vh]">
      <section className="max-w-7xl mx-auto  h-screen my-12">
        <div className="flex flex-wrap flex-start gap-16 px-8 justify-center">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
