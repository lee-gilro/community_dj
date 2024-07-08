"use client";

import React, { useState } from "react";
import styles from "./AuthModal.module.css";
import Link from "next/link";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUser, login } from "~/app/api/users";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import { axiosRequest } from "~/utils/api";

interface AuthModalProps {
  onClose: () => void;
  setUser: (user: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, setUser }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignup) {
      // Sign up
      if (formData.email.trim() === "") {
        alert("email을 입력해주세요.");
        return;
      }

      try {
        await createUser(formData);
        setFormData({
          email: "",
          username: "",
          password: "",
          phone_number: "",
        });
        onClose();
      } catch (error) {
        console.error("Error creating user:", error);
        alert("사용자 등록 중 오류가 발생했습니다.");
      }
    } else {
      // Log in
      try {
        await axios.post('/api/auth/login', { username: formData.username, password: formData.password });
        // const data = await axiosRequest<{ access: string }>('/api/auth/login', {
        //   method: 'POST',
        //   data: { username: formData.username, password: formData.password },
        // });

        // JWT 토큰을 로컬 스토리지에 저장
        // localStorage.setItem("access", data.access);
        // localStorage.setItem("refresh", data.refresh);

        // setCookie("accessToken", data.access);
        // setCookie("refreshToken", data.refresh);


        // const { access, refresh } = await login(formData);
        // setCookie("accessToken", access);
        // setCookie("refreshToken", refresh);

        // console.log("Access token:", getCookie("accessToken"));
        // console.log("Refresh token:", getCookie("refreshToken"));

        // console.log("Access token:", access);
        // console.log("Refresh token:", refresh);

        setFormData({
          ...formData,
          username: "",
          password: "",
        });
        setUser(true);
        onClose();
      } catch (error) {
        console.error("Error creating user:", error);
        alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요");
      }
    }
  };

  const [isFocused, setIsFocused] = useState<{ [key: string]: boolean }>({});
  const handleFocus = (field: string) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field: string) => {
    if (formData[field] === "") {
      setIsFocused({ ...isFocused, [field]: false });
    }
  };

  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <button onClick={() => onClose()} className={styles.closeButton}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2 className="text-2xl">
          <b>{isSignup ? "Sign Up" : "Log In"}</b>
        </h2>
        <small>
          By continuing, you agree to our{" "}
          <Link href="/" className="text-blue-500">
            User Agreement
          </Link>{" "}
          and acknowledge that you understand the{" "}
          <Link href="/" className="text-blue-500">
            Privacy Policy.
          </Link>
        </small>

        <ul className={styles.socialLogin}>
          <li>
            <button className={styles.socialButton}>
              <FontAwesomeIcon icon={faGoogle} className={styles.socialIcon} />
              Continue with <strong className="ml-1">Google</strong>
            </button>
          </li>
          <li>
            <button className={styles.socialButton}>
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.socialIcon}
              />
              Continue with <strong className="ml-1">Facebook</strong>
            </button>
          </li>
        </ul>

        <div className={styles.separator}>
          <hr className={styles.line} />
          <span>or</span>
          <hr className={styles.line} />
        </div>

        <form onSubmit={handleSubmit}>
          <ul>
            {isSignup && (
              <li className={styles.inputGroup}>
                <label
                  htmlFor="email"
                  className={`${styles.label} ${isFocused.email ? styles.focused : ""}`}
                >
                  Email<span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  required
                />
              </li>
            )}
            <li className={styles.inputGroup}>
              <label
                htmlFor="username"
                className={`${styles.label} ${isFocused.username ? styles.focused : ""}`}
              >
                Username<span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="username"
                className={styles.input}
                value={formData.username}
                onChange={handleChange}
                onFocus={() => handleFocus("username")}
                onBlur={() => handleBlur("username")}
                required
              />
            </li>
            <li className={styles.inputGroup}>
              <label
                htmlFor="password"
                className={`${styles.label} ${isFocused.password ? styles.focused : ""}`}
              >
                Password<span className={styles.required}>*</span>
              </label>
              <input
                type="password"
                name="password"
                className={styles.input}
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                required
              />
            </li>
            {isSignup && (
              <li className={styles.inputGroup}>
                <label
                  htmlFor="phone_number"
                  className={`${styles.label} ${isFocused.phone_number ? styles.focused : ""}`}
                >
                  Phone Number
                </label>
                <input
                  type="digits"
                  name="phone_number"
                  className={styles.input}
                  value={formData.phone_number}
                  onChange={handleChange}
                  onFocus={() => handleFocus("phone_number")}
                  onBlur={() => handleBlur("phone_number")}
                />
              </li>
            )}
          </ul>

          {isSignup ? (
            <small>
              Already have an account?{" "}
              <button
                className="text-blue-500"
                onClick={() => setIsSignup(!isSignup)}
              >
                Log In
              </button>
            </small>
          ) : (
            <small>
              <button className="text-blue-500">Forgot password? </button>
              <br />
              New to Community?{" "}
              <button
                className="text-blue-500"
                onClick={() => setIsSignup(!isSignup)}
              >
                Sign Up
              </button>
            </small>
          )}

          <button
            type="submit"
            className={`${styles.submitButton} ${styles.active}`}
          // disabled={!isFormValid}
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
        {/* <button>Close</button> */}
      </div>
    </div>
  );
};

export default AuthModal;
