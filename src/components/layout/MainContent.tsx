"use client";

type MainContentProps = {
  children: React.ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  return (
    <div className="lg:ml-[48%] pt-20 lg:pt-0">
      <main className="px-6 md:px-12 lg:px-16 xl:px-24 py-12">
        {children}
      </main>
    </div>
  );
}
