import { useServerHealth } from '../hooks/useServerHealth'

interface ServerGateProps {
  children: React.ReactNode
}

function ServerGate({ children }: ServerGateProps) {
  const { status, retry } = useServerHealth()

  // Block rendering until server is healthy
  if (status !== 'healthy') {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-bg-primary">
        <div className="w-full max-w-md px-6">
          <div className="bg-bg-panel border border-border-primary rounded-lg p-8 text-center">
            {status === 'checking' && (
              <>
                <div className="mb-6 flex justify-center">
                  <div className="w-12 h-12 border-4 border-border-primary border-t-accent-primary rounded-full animate-spin"></div>
                </div>
                <h2 className="text-xl font-semibold text-text-primary mb-2">
                  Checking server status...
                </h2>
                <p className="text-text-secondary text-sm">
                  Please wait while we verify the connection.
                </p>
              </>
            )}

            {status === 'waking-up' && (
              <>
                <div className="mb-6 flex justify-center">
                  <div className="w-12 h-12 border-4 border-border-primary border-t-accent-primary rounded-full animate-spin"></div>
                </div>
                <h2 className="text-xl font-semibold text-text-primary mb-2">
                  Waking up the server...
                </h2>
                <p className="text-text-secondary text-sm mb-1">
                  This app runs on free infrastructure.
                </p>
                <p className="text-text-tertiary text-sm">
                  First load may take up to 30 seconds.
                </p>
              </>
            )}

            {status === 'down' && (
              <>
                <div className="mb-6 flex justify-center">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-text-primary mb-2">
                  Service is temporarily unavailable
                </h2>
                <p className="text-text-secondary text-sm mb-6">
                  Please try again later.
                </p>
                <button
                  onClick={retry}
                  className="w-full bg-accent-primary text-button-primary-text font-medium rounded-lg py-3 px-4 hover:bg-accent-hover transition-colors duration-200"
                >
                  Retry
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Server is healthy, render children
  return <>{children}</>
}

export default ServerGate

