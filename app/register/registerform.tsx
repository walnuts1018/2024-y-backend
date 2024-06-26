"use client";
import { useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    if (!username) {
      setError("ユーザ名を入力してください");
      return;
    }

    if (!password) {
      setError("パスワードを入力してください");
      return;
    }
    try {
      const res = await fetch("/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (res.status === 200) {
        window.location.href = "/";
      } else {
        setError("アカウント登録に失敗しました");
      }
    } catch (e) {
      setError("アカウント登録に失敗しました");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className="flex flex-col items-center gap-4"
        id="login-form"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-80"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-80"
        />
      </form>
      <button
        type="submit"
        form="login-form"
        className="p-2 px-4 bg-blue-500 text-white rounded-full"
      >
        アカウント登録
      </button>
      <p className="text-black p-2 rounded-lg">{error}</p>
    </div>
  );
}
