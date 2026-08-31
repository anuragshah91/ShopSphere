import {
  FiHeadphones,
  FiRefreshCw,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const benefits = [
  {
    title: "Fast & Reliable Delivery",
    description:
      "Get your orders delivered quickly and safely, wherever you are.",
    icon: FiTruck,
  },
  {
    title: "Secure Payments",
    description:
      "Your payment information is protected with secure checkout technology.",
    icon: FiShield,
  },
  {
    title: "Easy Returns",
    description:
      "Changed your mind? Enjoy a simple and hassle-free return experience.",
    icon: FiRefreshCw,
  },
  {
    title: "Dedicated Support",
    description:
      "Our support team is here to help whenever you need us.",
    icon: FiHeadphones,
  },
];

export default function WhyShopSphere() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Why ShopSphere
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            Shopping made simple.
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            Everything you need for a smooth shopping experience, from
            discovery to delivery.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group bg-white p-7 transition-colors duration-300 hover:bg-[#fafafa] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4f1ff] text-accent transition-transform duration-300 group-hover:scale-105">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 text-base font-semibold tracking-tight text-foreground">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}