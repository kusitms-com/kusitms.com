export default function IntroductionMessage({ message }: { message: string }) {
  return (
    <p role="status" className="px-5 py-12 text-center text-label-14m text-label-alternative">
      {message}
    </p>
  );
}
