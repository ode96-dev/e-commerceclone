import GridOption from "@/components/gridoption/GridOption";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Sweet gifts for less"
          image="https://images.unsplash.com/photo-1584680226833-0d680d0a0794?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcCUyMGl0ZW1zfGVufDB8fDB8fHwwg"
          className="bg-pink-300 h-full md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image="https://images.unsplash.com/photo-1511733897353-5b04f82435a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvcCUyMGl0ZW1zfGVufDB8fDB8fHww"
          className="bg-blue-300 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcCUyMGl0ZW1zfGVufDB8fDB8fHww"
          className="bg-green-300 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://images.unsplash.com/photo-1473865857576-6551cdb55013?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3AlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D"
          className="bg-red-300 h-64"
        />
        <GridOption
          title="Shop Adidas"
          image="https://images.unsplash.com/photo-1510247548804-1a5c6f550b2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob3AlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D"
          className="bg-pink-300 h-64 col-span-2"
        />

        <GridOption
          title="Shop Computer"
          image="https://images.unsplash.com/photo-1616812912371-17ed05a28ae8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNob3AlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D"
          className="bg-red-200 col-span-2 row-span-2"
        />
      </div>
    </main>
  );
}
