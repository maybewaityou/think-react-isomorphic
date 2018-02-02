/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';

export default ({ someProp, history }: any) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
    <button onClick={() => {
      history.goBack();
    }}>go back</button>
  </div>
);
