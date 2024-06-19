const Container = ({ children,classname }: { children: React.ReactNode, classname?: string }) => {
  return <div className={`px-4 h-auto w-full lg:px-14 xl:px-[8.75rem] ${classname}`}>{children}</div>;
};

export default Container;
