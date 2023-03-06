import React from "react"

export const CartItem = ({ product }) => {
  const { name, price, image } = product
  return (
    <div className="w-[90%] p-4 border-b-2 border rounded">
      <div className="flex justify-between items-center gap-4">
        <img className="w-64 rounded" src={image} alt={name} />
        <p>{name}</p>
        <p>${price}</p>
        <div className="text-white bg-red-800 px-2 py-1 rounded hover:cursor-pointer">
          Remove
        </div>
      </div>
    </div>
  )
}
