import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import Demo from './Demo';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    <Demo />
    <Analytics />
  </>
);
