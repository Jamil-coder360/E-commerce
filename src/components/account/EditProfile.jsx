import { useState } from "react";

export default function EditProfile() {
  const [form, setForm] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleCancel = () => {
    setForm({
      firstName: "Md",
      lastName: "Rimel",
      email: "rimel1111@gmail.com",
      address: "Kingston, 5236, United State",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = () => {
    console.log("Saved:", form);
    // Add your save logic here
  };

  return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-[870px] py-10 px-20">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-red-400 mb-8">
          Edit Your Profile
        </h2>

        {/* Name & Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">
              First Name
            </label>
            <input
              type="text"
              value={form.firstName}
              onChange={handleChange("firstName")}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">
              Last Name
            </label>
            <input
              type="text"
              value={form.lastName}
              onChange={handleChange("lastName")}
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">
              Address
            </label>
            <input
              type="text"
              value={form.address}
              onChange={handleChange("address")}
              placeholder="Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />
          </div>
        </div>

        {/* Password Changes */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Password Changes
          </h3>

          <div className="flex flex-col gap-3">
            {/* Current Password */}
            <input
              type="password"
              value={form.currentPassword}
              onChange={handleChange("currentPassword")}
              placeholder="Current Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />

            {/* New Password */}
            <input
              type="password"
              value={form.newPassword}
              onChange={handleChange("newPassword")}
              placeholder="New Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />

            {/* Confirm New Password */}
            <input
              type="password"
              value={form.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="Confirm New Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4">
          <button
            onClick={handleCancel}
            className="px-6 py-2.5 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-2.5 rounded-lg bg-red-400 hover:bg-red-500 active:bg-red-600 text-white text-sm font-semibold transition"
          >
            Save Changes
          </button>
        </div>

      </div>
  );
}
