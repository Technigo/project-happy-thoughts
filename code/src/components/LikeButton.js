import React, { useEffect, useState } from "react";
import { API_URL } from "./utils/urls";
import moment from "moment";

// the like button, that we can like (with a heart) this will also send a post request to update the amount of likes to a specific message.
