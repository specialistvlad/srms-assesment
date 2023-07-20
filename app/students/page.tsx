async function getData() {
  const res = await fetch(`https://dummyjson.com/users`, {
    cache: "force-cache",
  });
  const list = await res.json();
  console.log(list.users);
  return list.users;
}

export default async function StundentsPage() {
  const data = await getData();
  return (
    <span>
      StundentsPage
      <ul>
        {data.map((list) => (
          <li key={list.id}>{list.firstName}</li>
        ))}
      </ul>
    </span>
  );
}
