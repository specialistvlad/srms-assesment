async function getData() {
  const res = await fetch(`https://dummyjson.com/products`);
  const list = await res.json();
  return list.products;
}

export default async function CoursesPage() {
  const data = await getData();
  return (
    <ul>
      {data.map((items) => (
        <li key={items.id}>{items.title}</li>
      ))}
    </ul>
  );
}
