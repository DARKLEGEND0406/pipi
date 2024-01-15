import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold">Adam Hammadi</h1>
        <p className="text-2xl font-medium">Welcome to my portfolio.</p>
      </div>
      <div>
        <Image
          src="/profile.jpg"
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </div>
    </main>
  )
}
