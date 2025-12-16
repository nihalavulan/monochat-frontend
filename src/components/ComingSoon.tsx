function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 px-4">
      <div className="w-24 h-24 rounded-full bg-bg-secondary flex items-center justify-center mb-6">
        <svg
          className="w-12 h-12 text-text-tertiary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-text-primary mb-2">Coming Soon</h2>
      <p className="text-text-tertiary text-center max-w-xs">
        This feature is under development and will be available soon.
      </p>
    </div>
  )
}

export default ComingSoon



