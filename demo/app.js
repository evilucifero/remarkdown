import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from '../build';

import '../style/monokai.css';

const LOREM =`
# heading1
## heading2
### heading3
#### heading4
##### heading5
###### heading6

1. qwew
  1. qwew
    1. qwew
      1. qwew
1. qwew
1. qwew


- li
  - sub li
    - sub sub li
- li
- li

\`\`\`javascript
function fff(a, b) {
  const sh = true;
  console.log("hello");
  return result;
}
\`\`\`
`;

ReactDOM.render(<Markdown md={LOREM} />, document.getElementById('main'));
