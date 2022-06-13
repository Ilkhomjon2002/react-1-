import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./app";
const root = ReactDOM.createRoot(document.getElementById("root"));
let cards = [
	{
		title: "New Apartment Nice Wiew",
		subtitle: "Quincy St, Brooklyn, NY, USA",
		bed: "./assets/svg/bed-image.svg",
		bath: "./assets\\svg\\bath-image.svg",
		garage: "./assets/svg/car-image.svg",
		sq: "./assets\\svg\\ruler-image.svg",
		like: "./assets\\svg\\heart-image.svg",
		user: "./assets\\user-image-1.jpg",
		home: "./assets/home-image-1.jpg",
		price: 7.5,
	},
	{
		title: "New Apartment Nice Wiew",
		subtitle: "Quincy St, Brooklyn, NY, USA",
		bed: "./assets/svg/bed-image.svg",
		bath: "./assets\\svg\\bath-image.svg",
		garage: "./assets/svg/car-image.svg",
		sq: "./assets\\svg\\ruler-image.svg",
		like: "./assets\\svg\\heart-image.svg",
		user: "./assets\\user-image-2.jpg",
		home: "./assets/home-image-2.jpg",
		price: 7.5,
	},
	{
		title: "New Apartment Nice Wiew",
		subtitle: "Quincy St, Brooklyn, NY, USA",
		bed: "./assets/svg/bed-image.svg",
		bath: "./assets\\svg\\bath-image.svg",
		garage: "./assets/svg/car-image.svg",
		sq: "./assets\\svg\\ruler-image.svg",
		like: "./assets\\svg\\heart-image.svg",
		user: "./assets\\user-image-3.jpg",
		home: "./assets/home-image-3.jpg",
		price: 7.5,
	},
];

root.render(
	<React.StrictMode>
		<div className="card-container">
			<Card card={cards[0]} />
			<Card card={cards[1]} />
			<Card card={cards[2]} />
		</div>
	</React.StrictMode>
);
