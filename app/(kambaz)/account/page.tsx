"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    if (!currentUser) {
      router.replace("/account/signin");
    } else {
      router.replace("/account/profile");
    }
  }, [currentUser, router]);

  return null;
}

