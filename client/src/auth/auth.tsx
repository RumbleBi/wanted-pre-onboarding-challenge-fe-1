import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const withAuth = (Component: any) => (props: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/");
    }
  }, [navigate]);

  return <Component {...props} />;
};
