//for server side only components we can use async funtions

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  return (
    <main className="flex min-h-screen flex-col">
      {JSON.stringify(data)}
    </main>
  )
}
