import Button from "@/components/Button";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`).then((r) =>
    r.json()
  );
  return (
    <div className="flex flex-col items-center">
      <div className="w-11/12 my-16">
        <div className="flex justify-between">
          <Button className="bg-white text-black border">뒤로가기</Button>
          <div className="flex justify-between gap-x-14">
            <Button
              id={id}
              buttonMethod="edit"
              className="bg-white text-black border"
            >
              수정
            </Button>
            <Button
              id={id}
              buttonMethod="delete"
              className="bg-white text-red-500 border"
            >
              삭제
            </Button>
          </div>
        </div>
        <div className=" min-h-[50rem] border rounded-3xl mt-8 p-20">
          <h1 className="text-6xl font-bold">{res.title}</h1>
          <p className="text-2xl mt-10">{res.content}</p>
        </div>
      </div>
    </div>
  );
}
