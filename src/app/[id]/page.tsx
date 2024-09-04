export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`/api/post/${id}`).then((r) => r.json());
  return (
    <div>
      {res.map((key: any) => (
        <div key={key}>
          <h1 className="text-4xl font-bold">{key.title}</h1>
        </div>
      ))}
    </div>
  );
}
