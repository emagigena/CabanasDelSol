import type React from "react"

interface SimpleLayoutProps {
  children: React.ReactNode
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#F1B140] text-white p-4">
        <h1 className="text-xl font-bold">Cabañas Del Sol</h1>
      </header>

      <main className="flex-grow p-4">{children}</main>

      <footer className="bg-[#F1B140] text-white p-4 text-center">
        <p>© {new Date().getFullYear()} Cabañas Del Sol. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

