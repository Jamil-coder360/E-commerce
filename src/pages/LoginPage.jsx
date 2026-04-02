import React, { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!form.email || !form.password) {
      return "সব ফিল্ড পূরণ করুন";
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      return "সঠিক email দিন";
    }

    if (form.password.length < 6) {
      return "Password কমপক্ষে 6 character হতে হবে";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ loading: false, error: "", success: "" });

    const errorMsg = validate();
    if (errorMsg) {
      setStatus({ loading: false, error: errorMsg, success: "" });
      return;
    }

    setStatus({ loading: true, error: "", success: "" });

    setTimeout(() => {
      if (
        form.email === "admin@gmail.com" &&
        form.password === "123456"
      ) {
        setStatus({
          loading: false,
          error: "",
          success: "Login successful 🎉",
        });
      } else {
        setStatus({
          loading: false,
          error: "Email বা Password ভুল",
          success: "",
        });
      }
    }, 1200);
  };

  const isDisabled = status.loading;

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to continue</p>

        {status.error && <div style={styles.error}>{status.error}</div>}
        {status.success && <div style={styles.success}>{status.success}</div>}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" disabled={isDisabled} style={styles.button}>
          {status.loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
    fontFamily: "sans-serif",
  },

  card: {
    width: "340px",
    padding: "30px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  title: {
    margin: 0,
    textAlign: "center",
  },

  subtitle: {
    margin: 0,
    textAlign: "center",
    fontSize: "13px",
    color: "#666",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    color: "black",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    opacity: 1,
  },

  error: {
    background: "#ffe5e5",
    color: "#d60000",
    padding: "8px",
    borderRadius: "6px",
    fontSize: "13px",
  },

  success: {
    background: "#e7f9ed",
    color: "#1a7f37",
    padding: "8px",
    borderRadius: "6px",
    fontSize: "13px",
  },
};

export default LoginPage;