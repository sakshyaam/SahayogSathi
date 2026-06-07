import React from "react";

const CreatePost = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Create post
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black">
            Publish a support request
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Share what you need clearly so others can understand and respond faster.
          </p>
        </div>

        <form className="mt-8 space-y-6 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <div>
            <label className="text-sm font-medium text-zinc-800">Title</label>
            <input
              type="text"
              placeholder="Write a clear post title"
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-800">Category</label>
            <select className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-400">
              <option>Medical</option>
              <option>Emergency</option>
              <option>Food</option>
              <option>Transport</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-800">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-800">Description</label>
            <textarea
              rows="6"
              placeholder="Explain the request with enough detail"
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700"
            >
              Save draft
            </button>
            <button
              type="submit"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
            >
              Publish post
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;