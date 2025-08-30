import React, { Suspense, lazy, useState } from "react";
import FallBack from "./components/fallBack";
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));
const LazyLoading = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Main app</h1>
      <button onClick={() => setShow(true)}>load heavy component</button>

      {show && (
        <Suspense fallback={<FallBack />}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoading;
