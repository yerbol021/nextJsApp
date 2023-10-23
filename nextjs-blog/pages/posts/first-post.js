import Link from "next/Link";

export default function FirstPost() {
  return (
    <>
      <h1>First post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
