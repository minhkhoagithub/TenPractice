import React from "react";

const items = [
  {
    id: 1,
    name: "Cà phê sữa đá",
    description: "Hương vị đậm đà, ngọt ngào và mát lạnh.",
    price: "35.000 VND",
    image: "/assets/caphe-sua-da.jpg",
  },
  {
    id: 2,
    name: "Trà đào cam sả",
    description: "Hương vị thanh mát, thơm ngon.",
    price: "40.000 VND",
    image: "/assets/tra-dao-cam-sa.jpg",
  },
  {
    id: 3,
    name: "Bạc xỉu",
    description: "Sự kết hợp hoàn hảo giữa cà phê và sữa.",
    price: "38.000 VND",
    image: "/assets/bac-xiu.jpg",
  },
];

const Item = ({ item }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-64">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <p className="text-green-600 font-bold mt-2">{item.price}</p>
    </div>
  );
};

const ItemList = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

// const itemsData = [
//   {
//     id: 1,
//     name: "Cà phê sữa đá",
//     description: "Hương vị đậm đà, ngọt ngào và mát lạnh.",
//     price: "35.000 VND",
//     image: "/assets/caphe-sua-da.jpg",
//   },
//   {
//     id: 2,
//     name: "Trà đào cam sả",
//     description: "Hương vị thanh mát, thơm ngon.",
//     price: "40.000 VND",
//     image: "/assets/tra-dao-cam-sa.jpg",
//   },
//   {
//     id: 3,
//     name: "Bạc xỉu",
//     description: "Sự kết hợp hoàn hảo giữa cà phê và sữa.",
//     price: "38.000 VND",
//     image: "/assets/bac-xiu.jpg",
//   },
// ];

// const Item = ({ item }) => {
//   return (
//     <Link to={`/detail/${item.id}`} className="border rounded-lg p-4 shadow-md w-64 block">
//       <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
//       <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
//       <p className="text-gray-600 text-sm">{item.description}</p>
//       <p className="text-green-600 font-bold mt-2">{item.price}</p>
//     </Link>
//   );
// };

// const ItemList = () => {
//   return (
//     <div className="flex gap-4 flex-wrap justify-center">
//       {itemsData.map((item) => (
//         <Item key={item.id} item={item} />
//       ))}
//     </div>
//   );
// };

// const DetailPage = () => {
//   const { id } = useParams();
//   const item = itemsData.find((item) => item.id === parseInt(id));
//   if (!item) return <p className="text-center">Không tìm thấy sản phẩm!</p>;

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
//       <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-md" />
//       <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
//       <p className="text-gray-600 text-sm">{item.description}</p>
//       <p className="text-green-600 font-bold mt-2">{item.price}</p>
//       <Link to="/" className="text-blue-500 mt-4 block">← Quay lại</Link>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ItemList />} />
//         <Route path="/detail/:id" element={<DetailPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
