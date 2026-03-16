import { BRAND } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-edge">
      <div className="max-w-[1120px] mx-auto px-6 h-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-serif text-[17px] text-primary">{BRAND.full}</p>
        <p className="text-xs text-muted">
          &copy; {year}. Commercial execution for businesses that have outgrown duct-tape operations.
        </p>
      </div>
    </footer>
  );
}
