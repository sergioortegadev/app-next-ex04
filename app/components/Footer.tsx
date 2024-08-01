import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="footer"
      className=" w-full bg-slate-800 dark:bg-slate-500 text-gray-300 dark:text-gray-800 mt-8 p-4 flex flex-wrap justify-between"
    >
      <h2 className="text-2xl">Sergio Ortega dev</h2>
      <div className="p-2">
        <Link href={"/"}>
          <h4 className="text-xl">Home</h4>
        </Link>
        <Link href={"/dashboard"}>
          <h4 className="text-xl">Dashboard</h4>
        </Link>
        <Link href={"/dashboard/customers"}>
          <h4 className="text-xl">Customers</h4>
        </Link>
        <Link href={"/dashboard/invoices"}>
          <h4 className="text-xl">Invoices</h4>
        </Link>
      </div>
    </div>
  );
}
