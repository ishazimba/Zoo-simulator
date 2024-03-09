import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <h1>Hi</h1>
      <Link href="/zoo" passHref legacyBehavior>
        <a>Click here</a>
      </Link>
    </div>
  );
}
