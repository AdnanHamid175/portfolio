"use client";
import Login from "@/components/admin/login";
import { useAppSelector } from "@/redux/books";
import { store } from "@/redux/store";
import { useSession } from "next-auth/react";
import React from "react";

const Layout = () => {
  const isLoading = useAppSelector((store: any) => store.loadingReducer);
  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }

  return <div>layout</div>;
};

export default Layout;
