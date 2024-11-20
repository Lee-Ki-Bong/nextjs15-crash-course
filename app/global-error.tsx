"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // 에러 발생 시 로깅 처리 등
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Global Error Page</h2>
      </body>
    </html>
  );
}
