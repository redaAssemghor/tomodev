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
            <NavigationMenuTrigger className="bg-transparent">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                <div className="flex flex-col gap-5">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <h1 className="text-lg font-medium">About 1</h1>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          fill the container and center the content vertically
                          and horizontally.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <h1 className="text-lg font-medium">About 2</h1>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          fill the container and center the content vertically
                          and horizontally.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <h1 className="text-lg font-medium">About 3</h1>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          fill the container and center the content vertically
                          and horizontally.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              About
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <li>
                  <Link
                    href="/about"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <h1 className="text-lg font-medium">About 3</h1>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      fill the container and center the content vertically and
                      horizontally.
                    </p>
                  </Link>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <h1 className="text-lg font-medium">About 3</h1>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        fill the container and center the content vertically and
                        horizontally.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <h1 className="text-lg font-medium">About 3</h1>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        fill the container and center the content vertically and
                        horizontally.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <h1 className="text-lg font-medium">About 3</h1>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        fill the container and center the content vertically and
                        horizontally.
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
