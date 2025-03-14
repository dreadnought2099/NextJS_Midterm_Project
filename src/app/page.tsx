import Link from "next/link";

const MainPage = () => {
return <>
<div className="min-h-screen flex justify-center items-center ">
  <div className="text-center text-secondary-color">
    <h1 className="text-7xl font-bold text-center mb-3">Raymart Magallanes</h1>
    <p className="text-xl">BSIT III</p>

    <div className="mt-6 space-x-7  ">
      <Link href={'/products'} className="button">See Products</Link>
      <Link href={'/todos'} className="button">See To Do&apos;s</Link>
    </div>
  </div>
   </div>
</>
}

export default MainPage;