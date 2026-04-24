export default function Guidethrough() {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Need a guidethrough?{" "}
        <a href="#" className="font-semibold text-indigo-600">
          <span aria-hidden="true" className="absolute inset-0" />
          Just ask<span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
