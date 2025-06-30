"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-2xl flex flex-col">
      <div>An error occured!</div>
      <div>Error: {error.message}</div>
    </div>
  );
}
