import { useState, useEffect } from 'react'

export function useTypewriter(phrases, speed = 70, deleteSpeed = 40, pauseMs = 1800) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    let timeout;

    if (!deleting) {
      if (charIndex < phrase.length) {
        timeout = setTimeout(() => {
          setText(phrase.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        }, speed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(phrase.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        }, deleteSpeed)
      } else {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex, phrases, speed, deleteSpeed, pauseMs])

  return text
}
