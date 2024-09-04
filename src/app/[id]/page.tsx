export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`).then((r) =>
    r.json()
  );
  return <div>{res.title}</div>;
}
