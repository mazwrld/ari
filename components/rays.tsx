import '@/styles/rays.css'

export default function Rays() {
  return (
    <div className="absolute left-0 top-0 w-screen">
      <div className="transition-bg relative flex h-screen flex-col items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="rays absolute -inset-10 opacity-50"></div>
        </div>
      </div>
    </div>
  )
}
