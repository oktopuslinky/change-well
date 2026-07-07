import Link from "next/link";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="display-1 mt-3 text-5xl sm:text-6xl">404</h1>
      <p className="mx-auto mt-4 max-w-md text-ink">We could not find the page you were looking for. Let us help you find your way back.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Return home</Button>
        <Button href="/contact" variant="ghost">Contact us</Button>
      </div>
    </Container>
  );
}
