export const Card = ({ product }) => {
  const { name, price, image } = product
  return (
    <div className="p-4 bg-slate-50 ">
      <img className="w-80 mb-4" src={image} alt={name} />
      <p>{name}</p>
      <div className="flex justify-around items-center my-3">
        <p>${price}</p>
        <div className="text-white p-2 rounded font-bold bg-blue-800 hover:bg-blue-900 hover:cursor-pointer">
          Add to Cart
        </div>
      </div>
    </div>
  )
}
