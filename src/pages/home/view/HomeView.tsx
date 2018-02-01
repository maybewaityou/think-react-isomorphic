/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';

import { IViewModelProps } from '../view-model/index';

export default (props: Readonly<IViewModelProps>) => (
  <div style={styles.container}>
    <p>Hello world ~ ~</p>
  </div>
);

const styles = {
  container: {
    flex: 1,

  },

};
