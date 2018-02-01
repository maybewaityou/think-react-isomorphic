/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import { IButtonProps } from './PropTypes';
import styles from './style/index';

export default (props: Readonly<IButtonProps>) => (
  <button style={[styles.container, props.style]} onClick={props.onPress}>
    <p style={[styles.title, props.titleStyle]}>{props.title}</p>
  </button>
);
