"use client";

const filters = [
  { value: "all", label: "All cabins" },
  { value: "small", label: "1 - 3 guests" },
  { value: "medium", label: "4 - 7 guests" },
  { value: "large", label: "8 - 12 guests" },
];

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const activeFilter = searchparams.get("capacity") ?? "all";
  function handleFileter(filter) {
    const params = new URLSearchParams(searchparams);
    params.set("capacity", filter);

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      {filters.map((filter) => (
        <Button key={filter.value} onClick={() => handleFileter(filter.value)} active={activeFilter === filter.value}>
          {filter.label}
        </Button>
      ))}
    </div>
  );
}

function Button({ children, onClick, active }) {
  return (
    <button onClick={onClick} className={`px-5 py-2 hover:bg-primary-700 ${active ? "bg-primary-700" : ""}`}>
      {children}
    </button>
  );
}

export default Filter;
