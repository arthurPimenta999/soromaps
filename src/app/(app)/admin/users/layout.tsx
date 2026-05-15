import type React from "react";

export default function UsersLayout({
  children,
  modals,
}: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modals}
    </>
  );
}
