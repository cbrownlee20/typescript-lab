interface Mountain {
  // put property & types in here
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

function findNameOfTallestMountain(mtns: Mountain[]): string {
  let nameOfTallestMountain: string = "";
  let tallestHeight: number = 0;
  for (const mtn of mtns) {
    if (mtn.height > tallestHeight) {
      tallestHeight = mtn.height;
      nameOfTallestMountain = mtn.name;
    }
  }

  return nameOfTallestMountain;
}

let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

//Products

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Television", price: 500 },
  { name: "Table", price: 500 },
  { name: "Stroller", price: 500 },
];

function calcAverageProductPrice(objs: Product[]): number {
  // we want to loop over every product in the product array
  //product objects
  let productName: string = "";
  let averageProductPrice: number = 0;

  for (const obj of objs) {
    if (obj.price = averageProductPrice) {
     productName = averageProductPrice;

    }
  }
  return averageProductPrice;
}

calcAverageProductPrice(products);