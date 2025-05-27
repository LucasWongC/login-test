import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "@descope/react-sdk";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jTnxXdkZiX31bdnxUQQ==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TcUdnWXxfdnZQQGlaVg==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkJhXX9dcXJXQ2dcWEM=;MjU5Njg1MEAzMjMwMmUzNDJlMzBHY0VoaHZ4anhFRzRHRnRxeHlGWHRiNU90R1lsZ0IrVkxPMHRROVU1SVE0PQ==;MjU5Njg1MUAzMjMwMmUzNDJlMzBYTFZuZ1JZSFFZN3B6LzBrQ3lHOTRVdUJDMVM5MVAva1VBSkRURXNNSVNBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVkW3tec3VTRGVbWUdx;MjU5Njg1M0AzMjMwMmUzNDJlMzBlOW90MDdmWHRBTUtXdTE4ekI2L0ZuMWhHbExEdXgyMmhxMkhlVmVCT0VvPQ==;MjU5Njg1NEAzMjMwMmUzNDJlMzBtZitUbmR0bElzUyszaVRFNEdIQnpEcUNrRWZCMTJvblh6cHZSWWhCTFdzPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkJhXX9dcXJXQ2hbVUM=;MjU5Njg1NkAzMjMwMmUzNDJlMzBtRjVlNTRIRzlFTUNkZVJGVDNzcmhtR2Z2VlZpZ0ZrOUx3S1UvQ0lqek5VPQ==;MjU5Njg1N0AzMjMwMmUzNDJlMzBJaEJlMHBKOVN0czVpTVJlTGhGdEdtaVlXSlc2bEpqeVY1Q3dFUnRQUFEwPQ==;MjU5Njg1OEAzMjMwMmUzNDJlMzBlOW90MDdmWHRBTUtXdTE4ekI2L0ZuMWhHbExEdXgyMmhxMkhlVmVCT0VvPQ=="
);

root.render(
  <React.StrictMode>
    <AuthProvider
      projectId="P2YJtD8aYBdaSCLRARb5osTM5a9Q"
      baseUrl="https://auth.dev.abaengine.com"
    >
      <App />
    </AuthProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

