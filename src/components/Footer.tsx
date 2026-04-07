export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Eric Riedel.
        </div>
      </div>
    </footer>
  );
}