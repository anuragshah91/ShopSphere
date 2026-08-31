import Link from "next/link";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const shopLinks = [
  { name: "All Products", href: "/shop" },
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Fashion", href: "/categories/fashion" },
  { name: "Home & Living", href: "/categories/home-living" },
  { name: "Accessories", href: "/categories/accessories" },
];

const supportLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
  { name: "Shipping & Delivery", href: "/shipping" },
  { name: "Returns", href: "/returns" },
  { name: "Track Order", href: "/orders/track" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Story", href: "/about#story" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">
              Stay in the loop
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Get the latest from ShopSphere.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
              New arrivals, exclusive offers and useful shopping inspiration,
              delivered occasionally.
            </p>
          </div>

          <form className="flex w-full max-w-md gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white/30"
            />

            <button
              type="submit"
              className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Shop<span className="text-[#a78bfa]">Sphere</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              A modern shopping destination for products you love and things
              you actually need.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FiFacebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FiTwitter size={17} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <FooterColumn title="Shop" links={shopLinks} />

          {/* Support */}
          <FooterColumn title="Support" links={supportLinks} />

          {/* Company */}
          <FooterColumn title="Company" links={companyLinks} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/40 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-1 transition-colors hover:text-white"
            >
              Contact
              <FiArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-white/45 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}