'use client';

import Image from 'next/image'
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
// import SendbirdProvider from "@sendbird/uikit-react/types/lib/Sendbird";

export default function Home() {
  return (
      <div className="App">
        <SendbirdApp
            // Add the two lines below.
            colorSet={myColorSet}
            appId={"EF50A7F2-48D7-4EAF-9778-503A0039CB79"}   // Specify your Sendbird application ID.
            userId={"jerry"}        // Specify your user ID.
        />
      </div>
  );
}