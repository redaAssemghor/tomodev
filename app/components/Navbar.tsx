import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent font-black">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-1 lg:grid-cols-[.75fr_1fr]">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="my-5 text-lg font-medium">TOMODEV</div>
                      <p className="text-sm text-muted-foreground ">
                        TOMODEV is a web agency that specializes in custom web
                        design, branding, and eCommerce development, helping
                        businesses create impactful digital experiences and grow
                        online.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <div className="flex flex-col gap-5">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/web-design"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <h1 className="text-lg font-medium">
                          Custom Web Design
                        </h1>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          create custom web design that is unique to your brand
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/wordpress"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <h1 className="text-lg font-medium">Wordpress</h1>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          create a brand that represents your business
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/ecommerce-development"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <h1 className="text-lg font-medium">
                          Ecommerce Development
                        </h1>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          create a custom eCommerce website
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/shopify"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <h1 className="text-lg font-medium">
                          Shopify Website Design
                        </h1>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          create a custom Shopify website
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent font-black">
              About
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <li>
                  <Link
                    href="/contact"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <h1 className="text-lg font-medium">Locations</h1>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      our locations and how to contact us
                    </p>
                  </Link>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <h1 className="text-lg font-medium">Contact Us</h1>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        contact us to get started
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <h1 className="text-lg font-medium">About Us</h1>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        learn more about TOMODEV
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>Documentation</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
