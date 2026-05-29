import L from "leaflet";



const navLinks = [
 {
	id: "menu",
	title: "Menu",
 },
 {
	id: "reservation",
	title: "Reservation",
 },
 {
	id: "about us",
	title: "About Us",
 },
 {
	id: "contact",
	title: "Contact",
 },
];


const restaurantIcon = new L.Icon({

		iconUrl: '/images/logo.png',

		iconSize: [55, 70],

		iconAnchor: [27, 70],

		popupAnchor: [0, -70]

	});

export{
    navLinks,
	restaurantIcon
}