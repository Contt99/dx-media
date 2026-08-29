export const DX_EASE = [0.22, 1, 0.36, 1] as const;

export const DX_TRANSITION = {
  duration: 0.45,
  ease: DX_EASE,
} as const;

export function dxTransition(
  shouldReduceMotion: boolean | null,
  duration: number = DX_TRANSITION.duration,
) {
  return {
    duration: shouldReduceMotion ? 0 : duration,
    ease: DX_EASE,
  } as const;
}
