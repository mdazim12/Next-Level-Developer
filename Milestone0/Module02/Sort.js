
// Input Date
  const rawApiDate =[
    {
      "id": 1,
      "productName": "Wireless Mouse",
      "category": "Electronics",
      "price": 15.99,
      "rating": 4.5,
      "stock": 120
    },
    {
      "id": 2,
      "productName": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.7,
      "stock": 80
    },
    {
      "id": 3,
      "productName": "Running Shoes",
      "category": "Footwear",
      "price": 69.99,
      "rating": 4.3,
      "stock": 50
    },
    {
      "id": 4,
      "productName": "Bluetooth Headphones",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.4,
      "stock": 65
    },
    {
      "id": 5,
      "productName": "Smart Watch",
      "category": "Wearables",
      "price": 99.99,
      "rating": 4.6,
      "stock": 40
    },
    {
      "id": 6,
      "productName": "Backpack",
      "category": "Accessories",
      "price": 25.50,
      "rating": 4.2,
      "stock": 70
    },
    {
      "id": 7,
      "productName": "LED Desk Lamp",
      "category": "Home",
      "price": 18.75,
      "rating": 4.1,
      "stock": 90
    },
    {
      "id": 8,
      "productName": "Gaming Chair",
      "category": "Furniture",
      "price": 150.00,
      "rating": 4.8,
      "stock": 20
    },
    {
      "id": 9,
      "productName": "USB-C Hub",
      "category": "Electronics",
      "price": 22.99,
      "rating": 4.3,
      "stock": 110
    },
    {
      "id": 10,
      "productName": "Water Bottle",
      "category": "Lifestyle",
      "price": 12.00,
      "rating": 4.0,
      "stock": 200
    }
  ]


  // Output = [{ name : "phone"} , { name : smartwatch }]

  //TODO Process
  //TODO Filter
  //TODO Sort
  //TODO Slice => frist 3 (top 3)
  //TODO Map => transform object shape to { name : "name" }

  const topEletronicProduct = rawApiDate
  .filter(item => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0,3)
  .map(item => {
    return { name : item.productName };
  })


  console.log(topEletronicProduct);


