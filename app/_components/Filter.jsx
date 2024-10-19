"use client";
function Filter() {
  function handleFileter(filter) {
    
  }
  return (
    <div className="border border-primary-800 flex">
      <button onClick={() => handleFileter("all")} className="px-5 py-2 hover:bg-primary-700">
        All cabins
      </button>
      <button onClick={() => handleFileter("small")} className="px-5 py-2 hover:bg-primary-700">
        1&mdash;3 guests
      </button>
      <button onClick={() => handleFileter("medium")} className="px-5 py-2 hover:bg-primary-700">
        4&mdash;7 guests
      </button>
      <button onClick={() => handleFileter("large")} className="px-5 py-2 hover:bg-primary-700">
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
