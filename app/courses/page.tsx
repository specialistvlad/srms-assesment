async function getData() {
  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "force-cache",
  });
  const list = await res.json();
  return list.products;
}

export default async function CoursesPage() {
  const data = await getData();
  return (
    <span>
      CoursesPage
      <ul>
        {data.map((list) => (
          <li key={list.id}>{list.title}</li>
        ))}
      </ul>
    </span>
  );
}
