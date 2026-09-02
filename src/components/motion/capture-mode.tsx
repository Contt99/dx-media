"use client";

import { useEffect } from "react";

export function CaptureMode() {
  useEffect(() => {
    const enabled = new URLSearchParams(window.location.search).has("capture");

    if (enabled) {
      document.body.dataset.capture = "true";
    }

    return () => {
      delete document.body.dataset.capture;
    };
  }, []);

  return null;
}
