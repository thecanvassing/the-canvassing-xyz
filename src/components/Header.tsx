import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      label: "Solutions",
      hasDropdown: true,
      items: [
        { label: "Research", href: "/products/online-surveys" },
        { label: "Participants", href: "/pax" },
      ],
    },
    {
      label: "Products",
      hasDropdown: true,
      items: [
        { label: "Online Surveys", href: "/products/online-surveys" },
        { label: "Product Testing", href: "/products/product-testing" },
      ],
    },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background border border-border">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link to={subItem.href} className="cursor-pointer">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`text-foreground/80 hover:text-primary transition-colors font-medium ${
                    location.pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-6">
              Login to Rez
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6">
              Get Started on Rez
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="space-y-2">
                    <span className="font-medium text-foreground">{item.label}</span>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    className="font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="border-primary text-primary rounded-full">
                  Login to Rez
                </Button>
                <Button className="bg-primary text-primary-foreground rounded-full">
                  Get Started on Rez
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
