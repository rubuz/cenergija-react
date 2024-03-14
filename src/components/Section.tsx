import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="mx-auto my-10 max-w-[1440px]">{children}</section>;
};

export default Section;
