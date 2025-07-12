export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p className="mb-3 md:mb-0">
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">FlowAPI</span>. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Dollypee48/FlowAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="hover:text-white transition duration-200"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition duration-200"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
