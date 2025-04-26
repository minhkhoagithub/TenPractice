import React from 'react'
export default function Header() {
    return (
    <header className="bg-gray-800 text-white py-4">
        <nav className="mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold p-5">ABC Restaurant</h1>
          <ul className="flex justify-around space-x-5 w-3xl mr-50">
            <li className="hover:text-gray-300 "> <a href="#"> Trang Chủ</a></li>
            <li className="hover:text-gray-300 "><a href="#">Danh sach SP</a></li>
            <li className="hover:text-gray-300 "><a href="#">Liên hệ</a></li>
          </ul>
        </nav>
    </header>
    )
}