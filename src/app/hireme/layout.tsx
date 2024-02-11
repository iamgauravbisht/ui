export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen px-56 py-10   bg-[#0C2D57]">
      {children}
    </div>
  );
}
