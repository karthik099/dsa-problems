// Group By Category, Find average of each caterogy prices, display in ascending of the average price per category
// Clue: Reduce, average and sort

const products = [
  { name: 'Laptop', price: 999.99, category: 'Electronics' },
  { name: 'Smartphone', price: 599.99, category: 'Electronics' },
  { name: 'Tablet', price: 299.99, category: 'Electronics' },
  { name: 'T-shirt', price: 19.99, category: 'Apparel' },
  { name: 'Jeans', price: 49.99, category: 'Apparel' },
  { name: 'Coffee Maker', price: 49.99, category: 'Home' },
  { name: 'Blender', price: 24.99, category: 'Home' },
  { name: 'Novel', price: 15.99, category: 'Books' },
  { name: 'Textbook', price: 89.99, category: 'Books' },
];

const groupByCategory = products.reduce((acc, product) => {
  const { category, price } = product;

  if (!acc[category]) {
    acc[category] = { count: 0, total: 0 };
  }
  acc[category].count += 1;
  acc[category].total += price;

  return acc;
});

const withAvg = Object.keys(groupByCategory).map(item => {
  // console.log(item);
  if (groupByCategory[item].count !== 'undefined') {
    return {
      count: groupByCategory[item].count,
      total: groupByCategory[item].total,
      avg: Number(
        (groupByCategory[item].total / groupByCategory[item].count).toFixed(2)
      ),
    };
  }
});
// console.log(withAvg);
const sortedByAvg = withAvg.sort((a, b) => a.avg - b.avg);

console.log(sortedByAvg);
