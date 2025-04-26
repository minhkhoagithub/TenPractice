import { useState, useContext } from 'react';
// import { OrderContext } from '../App';

export default function ListProduct() {
    const [selectedItem, setSelectedItem] = useState(null);
    const { addToOrder } = useContext(OrderContext);
    return(
        <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.price} VND</p>
              <p className="text-gray-700">{item.description}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => addToOrder(item)}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                >
                  Thêm vào order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-bold">{selectedItem.name}</h3>
          <p className="text-gray-800">{selectedItem.detail}</p>
        </div>
      )}
    </div>
    )
}
