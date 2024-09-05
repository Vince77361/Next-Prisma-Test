import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-24 bg-neutral-400 pl-16 flex items-center">
      <Link href="/">
        <h1 className="font-bold text-4xl text-white">Prisma Test</h1>
      </Link>
    </div>
  );
};

export default Header;
