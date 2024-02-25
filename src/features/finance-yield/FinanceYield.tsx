"use client";
import React from "react";
import Button from "@/components/ui/Button/Button";
import { useCdiQuery } from "./hooks/useCdiQuery";

export const FinanceYield: React.FC = () => {
  const { data, isLoading } = useCdiQuery();

  if (isLoading) return "loading...";
  return (
    <div>
      <Button label="TEST" />
      {JSON.stringify(data)}
    </div>
  );
};
