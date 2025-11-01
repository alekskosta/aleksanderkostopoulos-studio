'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  src?: string // primær kilde (mp3)
  fallbacks?: string[] // ekstra kilder: ["...m4a","...ogg"]
  volume?: number // 0..1
  title?: string
  artist?: string
}

export default function AmbientAudio({
  src = '/audio/audiovisualSite.mp3',
  fallbacks = ['/audio/audiovisualSite.m4a', '/audio/audiovisualSite.ogg'],
  volume = 0.2,
  title = 'Ambient',
  artist = 'Aleksander Kostopoulos',
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRaf = useRef<number | null>(null)

  const [enabled, setEnabled] = useState(false)
  const [currentVol, setCurrentVol] = useState(volume)

  // Velg første avspillbare kilde
  function pickPlayableSource(candidates: string[]) {
    const a = document.createElement('audio')
    const ok = (u: string) => {
      const ext = u.split('?')[0].split('#')[0].split('.').pop()?.toLowerCase()
      if (ext === 'mp3') return a.canPlayType('audio/mpeg') !== ''
      if (ext === 'ogg' || ext === 'oga') return a.canPlayType('audio/ogg') !== ''
      if (ext === 'm4a' || ext === 'aac') return a.canPlayType('audio/aac') !== ''
      if (ext === 'wav') return a.canPlayType('audio/wav') !== ''
      return a.canPlayType('audio/mpeg') !== ''
    }
    return candidates.find(ok)
  }

  // Fade helper (klamper volum og avbryter tidligere fades)
  const fadeTo = (el: HTMLAudioElement, to: number, ms: number) =>
    new Promise<void>((resolve) => {
      const from = el.volume
      const start = performance.now()
      const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

      if (fadeRaf.current) cancelAnimationFrame(fadeRaf.current)

      if (ms <= 0) {
        el.volume = clamp01(to)
        return resolve()
      }

      const step = (t: number) => {
        const k = Math.min(1, (t - start) / ms)
        const v = from + (to - from) * k
        el.volume = clamp01(v)
        if (k < 1) fadeRaf.current = requestAnimationFrame(step)
        else resolve()
      }

      fadeRaf.current = requestAnimationFrame(step)
    })

  // Opprett <audio> én gang
  useEffect(() => {
    const chosen = pickPlayableSource([src, ...fallbacks].filter(Boolean))
    if (!chosen) {
      console.error('Ingen støttet lydkilde blant:', [src, ...fallbacks])
      return
    }

    const el = new Audio(chosen)
    el.loop = true
    el.preload = 'auto'
    el.volume = 0 // vi fader inn etter play()
    audioRef.current = el

    // Logging / diagnose
    const onErr = () => {
      const err = (el as any).error
      console.error('Audio error', err?.code, err?.message, 'for', chosen)
    }
    const onCanPlay = () => console.log('Audio: canplay', chosen)
    const onPlay = () => console.log('Audio: play() ok', chosen)

    el.addEventListener('error', onErr)
    el.addEventListener('canplay', onCanPlay)
    el.addEventListener('play', onPlay)

    // Media Session
    if ((navigator as any).mediaSession) {
      ;(navigator as any).mediaSession.metadata = new (window as any).MediaMetadata({
        title,
        artist,
        album: 'Website Ambience',
      })
    }

    return () => {
      try {
        if (fadeRaf.current) cancelAnimationFrame(fadeRaf.current)
        el.pause()
        el.src = ''
        el.removeEventListener('error', onErr)
        el.removeEventListener('canplay', onCanPlay)
        el.removeEventListener('play', onPlay)
        audioRef.current = null
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, JSON.stringify(fallbacks), title, artist])

  // Toggle i bruker-gest (iOS/Safari)
  async function toggleAudio() {
    const el = audioRef.current
    if (!el) return

    if (!enabled) {
      setEnabled(true)
      localStorage.setItem('ambient-enabled', 'true')
      try {
        await el.play() // må skje i dette klikket
        await fadeTo(el, currentVol, 600) // fade inn
      } catch (e) {
        console.error('play() failed', e)
        setEnabled(false)
        localStorage.setItem('ambient-enabled', 'false')
      }
    } else {
      try {
        await fadeTo(el, 0, 400) // fade ut først
        el.pause()
      } finally {
        setEnabled(false)
        localStorage.setItem('ambient-enabled', 'false')
      }
    }
  }

  // Live volum (mykt) når aktiv
  useEffect(() => {
    const el = audioRef.current
    if (!el || !enabled) return
    fadeTo(el, currentVol, 200)
  }, [currentVol, enabled]) // eslint-disable-line react-hooks/exhaustive-deps

  // Pause/resume ved tab-visibility
  useEffect(() => {
    const onVis = async () => {
      const el = audioRef.current
      if (!el) return
      if (document.hidden) {
        await fadeTo(el, 0, 200)
        el.pause()
      } else if (enabled) {
        try {
          await el.play()
          await fadeTo(el, currentVol, 300)
        } catch {}
      }
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [enabled, currentVol]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="ambient-audio">
      <button
        type="button"
        aria-pressed={enabled}
        aria-label={enabled ? 'Turn ambient sound off' : 'Turn ambient sound on'}
        onClick={toggleAudio}
        className="ambient-toggle"
      >
        {enabled ? '🔊 Sound on' : '🔈 Sound off'}
      </button>

      <label className="ambient-vol">
        <span className="sr-only">Volume</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={currentVol}
          onChange={(e) => setCurrentVol(parseFloat(e.target.value))}
          aria-label="Ambient volume"
          disabled={!enabled}
        />
      </label>
    </div>
  )
}
