import * as React from "react";

import { storiesOf } from "@storybook/react";
import { GeoMapView } from "../GeoMapView";

storiesOf("MapView | Basic", module).add("Default", () => <GeoMapView />);
