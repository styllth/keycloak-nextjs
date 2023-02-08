export default function Home() {
  return (
    <>
      <h2>Not signed in</h2>
      <a href={process.env.NEXT_SIGNIN_URL}>Sign in</a>
    </>
  );
}
