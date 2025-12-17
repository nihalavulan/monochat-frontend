function BackgroundPatterns() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-primary opacity-5 rounded-3xl blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-accent-primary opacity-5 rounded-2xl blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-accent-primary opacity-5 rounded-3xl blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-primary opacity-5 rounded-2xl blur-3xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent-primary opacity-10 rounded-2xl rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent-primary opacity-10 rounded-xl -rotate-12"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 border border-accent-primary opacity-10 rounded-2xl rotate-45"></div>
        <div className="absolute bottom-20 right-16 w-20 h-20 border border-accent-primary opacity-10 rounded-xl -rotate-45"></div>
      </div>
    </>
  )
}

export default BackgroundPatterns





