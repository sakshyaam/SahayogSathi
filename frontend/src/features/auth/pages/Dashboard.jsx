import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Medical",
  "Emergency",
  "Food",
  "Transport",
  "Education",
  "Community",
];

const posts = [
  {
    id: 1,
    title: "Need medicine pickup for elderly patient",
    category: "Medical",
    description:
      "Looking for someone who can collect prescribed medicine from Patan Hospital and deliver it this evening.",
    deadline: "Due today",
    responses: 5,
    budget: "Rs 500",
    author: "Aayusha S.",
    rating: "4.9",
    status: "urgent",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    id: 2,
    title: "Urgent blood donor coordination required",
    category: "Emergency",
    description:
      "We need help coordinating available blood donors for a patient currently admitted in Kathmandu.",
    deadline: "Due today",
    responses: 3,
    budget: "Rs 800",
    author: "Rohit M.",
    rating: "4.8",
    status: "open",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 3,
    title: "Temporary food support for family of four",
    category: "Food",
    description:
      "Short-term food help needed for a family in Bhaktapur while they wait for local assistance to arrive.",
    deadline: "Due tomorrow",
    responses: 7,
    budget: "Rs 650",
    author: "Sanjana R.",
    rating: "4.7",
    status: "open",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 4,
    title: "Hospital transport support needed",
    category: "Transport",
    description:
      "Seeking transport help for an early morning hospital follow-up visit from Kirtipur to Patan.",
    deadline: "Due tomorrow",
    responses: 2,
    budget: "Rs 400",
    author: "Nabin K.",
    rating: "4.6",
    status: "urgent",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 5,
    title: "Need tutoring support for SEE student",
    category: "Education",
    description:
      "Looking for someone who can help with two short math revision sessions for a school student this week.",
    deadline: "Due in 2 days",
    responses: 4,
    budget: "Rs 700",
    author: "Mina T.",
    rating: "4.8",
    status: "new",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    id: 6,
    title: "Help organize community relief collection",
    category: "Community",
    description:
      "Need volunteers to help sort and organize donated supplies before distribution this weekend.",
    deadline: "Due in 3 days",
    responses: 6,
    budget: "Volunteer",
    author: "Ritesh P.",
    rating: "4.9",
    status: "open",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const navigation = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Browse Posts", to: "/browse-posts", active: true },
  { label: "Post a Request", to: "/create-post" },
  { label: "My Posts", to: "/my-posts" },
  { label: "Messages", to: "/messages", badge: 3 },
  { label: "Reviews", to: "/reviews" },
];

const statusStyles = {
  urgent: "bg-red-50 text-red-600",
  open: "bg-emerald-50 text-emerald-600",
  new: "bg-amber-50 text-amber-700",
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f6f1eb] text-[#24190f]">
      <div className="flex min-h-screen">
        <aside className="hidden w-[270px] shrink-0 flex-col bg-[#1f1309] text-white lg:flex">
          <div className="border-b border-white/10 px-6 py-6">
            <Link to="/" className="flex items-start gap-3">
              <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e5670a] text-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12.5L10.5 15.5L16.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3.75"
                    y="3.75"
                    width="16.5"
                    height="16.5"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight">SathiSahayog</p>
                <p className="mt-1 text-sm leading-5 text-[#bfae9c]">
                  Students helping
                  <br />
                  students
                </p>
              </div>
            </Link>
          </div>

          <nav className="flex-1 px-3 py-5">
            <div className="space-y-1.5">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                    item.active
                      ? "bg-[#3a2312] text-white"
                      : "text-[#f2e5d8] hover:bg-[#2b1a0d]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-[#e5670a] px-2 py-0.5 text-xs text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </nav>

          <div className="border-t border-white/10 px-4 py-5">
            <div className="rounded-2xl bg-[#26170c] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5670a] text-sm font-semibold text-white">
                  AR
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Aryan Rao</p>
                  <p className="text-xs text-[#bfae9c]">B.Tech CSE • Yr 2</p>
                </div>
              </div>

              <button className="mt-4 text-sm text-[#d8c7b4] hover:text-white">
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="border-b border-[#eadfd3] bg-white">
            <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8">
              <div>
                <p className="text-sm font-semibold text-[#24190f]">Browse Posts</p>
                <p className="text-xs text-[#8e7764]">
                  SathiSahayog • Community support feed
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex md:w-[320px] items-center rounded-2xl border border-[#eadfd3] bg-[#fbf7f2] px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Quick search..."
                    className="w-full bg-transparent text-sm text-[#5d4b3f] outline-none placeholder:text-[#b49d8b]"
                  />
                </div>

                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd3] bg-[#fbf7f2] text-[#9b7c66]">
                  🔔
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5670a] text-sm font-semibold text-white">
                  AR
                </button>
              </div>
            </div>
          </header>

          <main className="px-5 py-7 lg:px-8">
            <section>
              <h1 className="text-[2rem] font-semibold tracking-tight text-[#2a1d12]">
                Browse Posts
              </h1>
              <p className="mt-2 text-sm text-[#8f7866]">
                Find posts from other users, discover urgent needs, and respond where you can help.
              </p>
            </section>

            <section className="mt-6">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
                <div className="flex-1 rounded-2xl border border-[#eadfd3] bg-white px-4 py-3">
                  <input
                    type="text"
                    placeholder="Search posts by keyword, category, or location..."
                    className="w-full bg-transparent text-sm text-[#5d4b3f] outline-none placeholder:text-[#b49d8b]"
                  />
                </div>

                <button className="rounded-2xl border border-[#eadfd3] bg-white px-4 py-3 text-sm font-medium text-[#5d4b3f]">
                  Newest First
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      index === 0
                        ? "bg-[#e5670a] text-white"
                        : "border border-[#e8ddd0] bg-white text-[#4e3e33] hover:border-[#d8c7b4]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            <section className="mt-6 grid gap-5 xl:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-[22px] border border-[#eadfd3] bg-white p-5 shadow-[0_1px_2px_rgba(36,25,15,0.04)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${post.iconBg} ${post.iconColor}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6V18M6 12H18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className="min-w-0">
                        <h2 className="text-lg font-semibold leading-6 text-[#2b1f14]">
                          {post.title}
                        </h2>
                        <p className="mt-1 text-sm text-[#9a806d]">{post.category}</p>
                      </div>
                    </div>

                    <button className="text-[#b89c86] hover:text-[#7c6553]">⌑</button>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-[#7a6556]">
                    {post.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[#9a806d]">
                    <span>{post.deadline}</span>
                    <span>{post.responses} responses</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#f0e7dd] pt-4">
                    <div>
                      <p className="text-[1.7rem] font-semibold tracking-tight text-[#0d6b61]">
                        {post.budget}
                      </p>
                      <p className="text-sm text-[#8f7866]">
                        by {post.author} • ★ {post.rating}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                          statusStyles[post.status]
                        }`}
                      >
                        {post.status}
                      </span>

                      <button className="rounded-2xl bg-[#e5670a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d15b08]">
                        View Post
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;