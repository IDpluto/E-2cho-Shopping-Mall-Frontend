import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-muted py-4 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
            <LeafIcon className="h-6 w-6 fill-primary" />
            <span>Eco Life Essentials</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link href="#" className="hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link
              href="#"
              className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Shop Now
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Sustainable Living, Personalized
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Discover a world of eco-friendly, customizable essentials that empower your lifestyle.
              </p>
              <div className="flex justify-center gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Shop Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Product 1"
                  width={400}
                  height={400}
                  className="h-64 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-semibold">Bamboo Tumbler</h3>
                  <p className="text-muted-foreground">Sustainable, reusable, and customizable.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">$24.99</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Product 2"
                  width={400}
                  height={400}
                  className="h-64 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-semibold">Organic Cotton Tote</h3>
                  <p className="text-muted-foreground">Durable, versatile, and eco-friendly.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">$14.99</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Product 3"
                  width={400}
                  height={400}
                  className="h-64 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-semibold">Reusable Straws</h3>
                  <p className="text-muted-foreground">Durable, versatile, and eco-friendly.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">$9.99</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <img
                  src="/placeholder.svg"
                  alt="About"
                  width={600}
                  height={400}
                  className="h-64 w-full rounded-lg object-cover object-center"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Eco Life Essentials</h2>
                <p className="text-muted-foreground">
                  At Eco Life Essentials, we are passionate about creating sustainable, customizable products that
                  empower individuals to live a more eco-friendly lifestyle. Our mission is to provide high-quality,
                  environmentally responsible alternatives to everyday items, without compromising on style or
                  functionality.
                </p>
                <p className="text-muted-foreground">
                  We believe that small changes can make a big difference, and we're dedicated to helping our customers
                  reduce their carbon footprint one product at a time. From our reusable tumblers to our organic cotton
                  totes, every item in our collection is designed with the environment in mind.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Customize Your Essentials</h2>
              <p className="text-muted-foreground md:text-xl">
                Make your everyday items truly your own with our personalization options.
              </p>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">Customize Tumbler</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Customize Tumbler"
                  width={400}
                  height={400}
                  className="h-64 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-semibold">Customize Tumbler</h3>
                  <p className="text-muted-foreground">Choose your color, add a monogram, and more.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">Customize Tote</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Customize Tote"
                  width={400}
                  height={400}
                  className="h-64 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-semibold">Customize Tote</h3>
                  <p className="text-muted-foreground">Add your own design or choose from our patterns.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">Customize Straws</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Customize Straws"
                  width={400}
                  height={400}
                  className="h-64 w-full object-cover object-center transition-all group-hover:scale-105"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-semibold">Customize Straws</h3>
                  <p className="text-muted-foreground">Choose your color and add a personalized engraving.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Company</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Our Mission
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Careers
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Press
                </Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Products</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Tumblers
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Totes
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Straws
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Customization
                </Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Resources</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Blog
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  FAQ
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Sustainability
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Shipping & Returns
                </Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Contact</h3>
              <nav className="grid gap-2">
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Email
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Phone
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Social Media
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                  Address
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; 2023 Eco Life Essentials. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
