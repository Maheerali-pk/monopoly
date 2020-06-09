import { ITile } from "../Compnents/Game/Board/Row/Tile/Tile";

const string = `
hunza brown 60 50,10 30 90 160 250
cm
swat brown 60 50, 10 30 90 160 250
income-tax 200

`;

export const initialTiles: ITile[] = [
   //0-5
   {
      name: "Go",
      type: "go",
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Mardan",
      color: "brown",
      type: "colored-property",
      price: 60,
      housePrice: 50,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      name: "Community Chest",
      type: "community-chest",
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Charsada",
      color: "brown",
      type: "colored-property",
      price: 60,
      housePrice: 50,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      name: "Income Tax",
      type: "income-tax",
      taxValue: 200,
   },
   {
      name: "Bus Stop",
      owner: -1,
      currentRent: 0,
      type: "destination",
      price: 200,
   },

   //5-10
   {
      owner: -1,
      currentRent: 0,
      name: "Abbottabad",
      color: "blue",
      type: "colored-property",
      price: 80,
      housePrice: 50,
      allRents: [10, 30, 90, 160, 250],
   },
   { name: "Chance", type: "chance" },
   {
      owner: -1,
      currentRent: 0,
      name: "Swat",
      color: "blue",
      type: "colored-property",
      price: 80,
      housePrice: 50,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Mansehra",
      color: "blue",
      type: "colored-property",
      price: 100,
      housePrice: 50,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      name: "Just Visiting",
      type: "just-visiting",
   },

   //10-15
   {
      owner: -1,
      currentRent: 0,
      name: "Peshawar",
      color: "pink",
      type: "colored-property",
      price: 120,
      housePrice: 100,
      allRents: [10, 30, 90, 160, 250],
   },
   { type: "company", name: "Electric Company", price: 150 },
   {
      owner: -1,
      currentRent: 0,
      name: "Charsada",
      color: "pink",
      type: "colored-property",
      price: 120,
      housePrice: 100,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Mardan",
      color: "pink",
      type: "colored-property",
      price: 140,
      housePrice: 100,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Railway",
      type: "destination",
      price: 200,
   },

   //16-20
   {
      owner: -1,
      currentRent: 0,
      name: "Jehlum",
      color: "orange",
      type: "colored-property",
      price: 180,
      housePrice: 100,
      allRents: [10, 30, 90, 160, 250],
   },
   { name: "Community Chest", type: "community-chest" },
   {
      owner: -1,
      currentRent: 0,
      name: "Rawalpindi",
      color: "orange",
      type: "colored-property",
      price: 180,
      housePrice: 100,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Islamabad",
      color: "orange",
      type: "colored-property",
      price: 200,
      housePrice: 100,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      name: "Free Parking",
      type: "free-parking",
   },

   //21-25
   {
      owner: -1,
      currentRent: 0,
      name: "Sailkot",
      color: "red",
      type: "colored-property",
      price: 220,
      housePrice: 150,
      allRents: [10, 30, 90, 160, 250],
   },
   { name: "Chance", type: "chance" },
   {
      owner: -1,
      currentRent: 0,
      name: "Faisalabad",
      color: "red",
      type: "colored-property",
      price: 220,
      housePrice: 150,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Lahore",
      color: "red",
      type: "colored-property",
      price: 240,
      housePrice: 150,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Airport",
      type: "destination",
      price: 200,
   },

   //26-30
   {
      owner: -1,
      currentRent: 0,
      name: "Multan",
      color: "yellow",
      type: "colored-property",
      price: 260,
      housePrice: 150,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Bhawalpur",
      color: "yellow",
      type: "colored-property",
      price: 260,
      housePrice: 150,
      allRents: [10, 30, 90, 160, 250],
   },
   { type: "company", price: 150, name: "Water Works" },
   {
      owner: -1,
      currentRent: 0,
      name: "Sibi",
      color: "yellow",
      type: "colored-property",
      price: 280,
      housePrice: 150,
      allRents: [10, 30, 90, 160, 250],
   },
   { type: "go-to-jail", name: "Go To Jail" },

   //31-35
   {
      owner: -1,
      currentRent: 0,
      name: "Khuzdar",
      color: "green",
      type: "colored-property",
      price: 300,
      housePrice: 200,
      allRents: [10, 30, 90, 160, 250],
   },
   {
      owner: -1,
      currentRent: 0,
      name: "Gwadar",
      color: "green",
      type: "colored-property",
      price: 300,
      housePrice: 200,
      allRents: [10, 30, 90, 160, 250],
   },
   { name: "Community Chest", type: "community-chest" },
   {
      owner: -1,
      currentRent: 0,
      name: "Quetta",
      color: "green",
      type: "colored-property",
      price: 320,
      housePrice: 200,
      allRents: [10, 30, 90, 160, 250],
   },
   { owner: -1, currentRent: 0, type: "destination", name: "Port", price: 200 },

   //36-40
   { name: "Chance", type: "chance" },
   {
      owner: -1,
      currentRent: 0,
      name: "Hyderabad",
      color: "purple",
      type: "colored-property",
      price: 350,
      housePrice: 200,
      allRents: [10, 30, 90, 160, 250],
   },
   { name: "Income Tax", type: "income-tax", taxValue: 100 },
   {
      owner: -1,
      currentRent: 0,
      name: "Karachi",
      color: "purple",
      type: "colored-property",
      price: 400,
      housePrice: 200,
      allRents: [10, 30, 90, 160, 250],
   },
];
