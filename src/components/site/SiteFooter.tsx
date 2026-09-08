import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Thandiwe Angela Setshange &middot; Electrical Technician
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="mailto:angelasetshange2@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            angelasetshange2@gmail.com
          </a>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
