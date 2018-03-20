/* In */

import _ from "lodash";

const smoosh = _.flatten;

_.map([[2, [4]], [[3], [5]]], smoosh);

/* Out */

import _flatten from "lodash/flatten";
import _map from "lodash/map";

const smoosh = _flatten;

_map([[2, [4]], [[3], [5]]], smoosh);
