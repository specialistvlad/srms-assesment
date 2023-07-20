async function getData() {
  const res = await fetch(`https://dummyjson.com/users`);
  const list = await res.json();
  return list.users;
}

export default async function ResultsPage() {
  const data = await getData();
  return (
    <ul>
      {data.map((items) => (
        <li key={items.id}>{items.firstName}</li>
      ))}
    </ul>
  );
}
