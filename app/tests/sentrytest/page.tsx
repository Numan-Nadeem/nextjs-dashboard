'use client';

const SentryTest = () => {
  return (
    <div>
      <button
        type="button"
        className="bg-red-500 text-white"
        onClick={() => {
          throw new Error('Sentry Test Error');
        }}
      >
        Break the world
      </button>
    </div>
  );
};

export default SentryTest;
