import React, { useState, useEffect } from "react";

/**
 * Typewriter component
 * Props:
 *  - words: array of phrases
 *  - typingSpeed: ms per char when typing
 *  - deletingSpeed: ms per char when deleting
 *  - pause: ms to wait after full word typed before deleting
 *  - className: tailwind/css classes for the text
 */
export default function Typewriter({
  words = ["Meterial UI", "Framer Motion"],
  typingSpeed = 120,
  deletingSpeed = 60,
  pause = 1000,
  className = "text-3xl font-bold text-white"
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer;
    const current = words[wordIndex];

    if (!isDeleting) {
      // typing
      if (text.length < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // full typed -> pause then start deleting
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // deleted completely -> move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
    // words is intentionally included so if caller passes new array it updates
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <>
      {/* simple keyframes for blinking cursor (keeps component self-contained) */}
      <style>{`@keyframes tw-blick { 0% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 1 } }`}</style>

      <span className={className} aria-live="polite">
        {text}
        <span
          style={{
            display: "inline-block",
            marginLeft: "0.2rem",
            width: "0.6ch",
            animation: "tw-blick 1s step-start infinite"
          }}
          aria-hidden="true"
        >
          |
        </span>
      </span>
    </>
  );
}
