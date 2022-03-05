import { PropsWithChildren } from "react";

export const Bordered = ({ children }: PropsWithChildren<{}>) => (
  <div style={{ border: "1px solid green" }}>{children}</div>
);
